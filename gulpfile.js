const path = {
  build: {
    html: 'build/',
    style: 'build/style/',
    fonts: 'build/fonts/',
    script: 'build/js/',
    img: 'build/img/',
  },
  src: {
    indexHtml: 'source/index.html',
    html: 'source/**/*.html',
    style: {
      nativeCss: 'source/style/',
    },
    fonts: 'source/fonts/',
    script: 'source/**/*.js',
    img: 'source/img/**/*',
  },
  clean: 'build/**',
};

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');        // для трансшпиляции
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');      // для объединения файлов
const cssnano = require('gulp-cssnano');    // для минификации css-файлов
const del = require('del');                 // zero client tool
const env = require('gulp-env');            // переменные окружения
const gulp = require('gulp');
const gulpif = require('gulp-if');          // для минификации js-файлов
const imagemin = require('gulp-imagemin');  // compress images
const plumber = require('gulp-plumber');    // модуль для отслеживания ошибок
const rigger = require('gulp-rigger');
const sourcemaps = require('gulp-sourcemaps');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const uglify = require('gulp-uglify');      // для минификации js-файлов
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');

env({
  file: '.env',
  type: 'ini',
});

/* zero client */
gulp.task('clean', () => del(path.clean));

/* сборка html */
gulp.task('build-html', () => {
  gulp.src(path.src.indexHtml)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html));
});

/* сборка стилей в один файл style-min.css */
gulp.task('build-styles', () => {
  gulp.src(path.src.style.nativeCss + '*.*')
    .pipe(plumber())
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', autoprefixer({
      cascade: false,
    })))
    .pipe(concat('style-min.css'))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', cssnano()))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
    .pipe(gulp.dest(path.build.style));
});

/* сборка шрифтов */
gulp.task('build-fonts', () => {
  gulp.src(`${path.src.fonts}*.ttf`)
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.src.fonts));
  return gulp.src(`${path.src.fonts}*.ttf`)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.src.fonts));
});

gulp.task('copy-fonts', () => {
  gulp.src(`${path.src.fonts}*.*[^".css"]`)
    .pipe(gulp.dest(path.build.fonts));

  gulp.src(`${path.src.fonts}*.css`)
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(concat('fonts.css'))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', cssnano({
      minifyFontValues: false,
      discardUnused: false,
    })))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
    .pipe(gulp.dest(path.build.fonts));
});

/* сборка скриптов в один файл *-min.js */
gulp.task('build-scripts', () => {
  gulp.src(path.src.script)
    .pipe(plumber())
    .pipe(eslint('./.eslintrc'))
    .pipe(eslint.format())
    .pipe(rigger())
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
    .pipe(concat('scripts-min.js'))
    .pipe(gulpif(process.env.BABEL === 'switch-on', babel({
      presets: [
        '@babel/env',
      ],
    })))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', uglify()))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
    .pipe(gulp.dest(path.build.script));
});

// compress images
gulp.task('build-images', () => {
  gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img));
});

gulp.task(
  'default', [
    'build-fonts',
    'copy-fonts',
    'build-html',
    'build-styles',
    'build-scripts',
    'build-images',
    'browser-sync',
  ]);

// build for prod
gulp.task(
  'build', [
    'clean',
    'build-fonts',
    'copy-fonts',
    'build-html',
    'build-styles',
    'build-scripts',
    'build-images',
  ]);

// browser-sync
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './build/',
    },
    port: 3006,
  });
  gulp.watch(path.src.fonts, [
    'watch-fonts',
  ]);
  gulp.watch(path.src.html, [
    'watch-html',
  ]);
  gulp.watch(path.src.style.nativeCss + '*.*', [
    'watch-styles',
  ]);
  gulp.watch(path.src.script, [
    'watch-scripts',
  ]);
  gulp.watch(path.src.img, [
    'watch-images',
  ]);
});

// watchers
gulp.task('watch-fonts', [
  'build-fonts',
  'copy-fonts',
], () => browserSync.reload());
gulp.task('watch-html', [
  'build-html',
], () => browserSync.reload());
gulp.task('watch-styles', [
  'build-styles',
], () => browserSync.reload());
gulp.task('watch-scripts', [
  'build-scripts',
], () => browserSync.reload());
gulp.task('watch-images', [
  'build-images',
], () => browserSync.reload());

