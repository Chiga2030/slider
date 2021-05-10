class GalleryftSlider {
  wrapperClassName = '.galleryft-slider__wrapper';
  slideClassName = '.galleryft-slider__slide';
  activeSlideClassName = 'galleryft-slider__slide_active';
  marginSlide = '1vw';
  marginActiveSlide = '1vw 8.5vw';

  constructor (nameById) {
    this.slider = document.getElementById(nameById);
    this.sliderWrapper = this.slider.querySelector(
      this.wrapperClassName
    );
    // this.amountSlides = this.sliderWrapper.querySelectorAll(
    //   this.slideClassName
    // ).length;
    this.activeSlide = this.sliderWrapper.querySelector(
      `.${this.activeSlideClassName}`
    );
    this.slidesCollection = this.sliderWrapper.children;
  }

  downMarginSlide () {
    this.activeSlide.style.margin = this.marginSlide;
  }

  numberActiveClass (
    collection = this.sliderWrapper.children
  ) {
    for (let index = 0; index <= collection.length; index++) {
      if (collection[index].classList.length > 1) {
        return index;
      }
    }
  }

  removeActiveClass (
    collection = this.sliderWrapper.children
  ) {
    collection[this.numberActiveClass()].classList.remove(this.activeSlideClassName);
  }

  newActiveClass (
    collection = this.sliderWrapper.children,
    numberNewActiveClass
  ) {
    collection[numberNewActiveClass].classList.add(activeSlideClassName);
  }

  downScaleSlide () {
    this.activeSlide.style.transform = 'scale(1)';
  }

  slideTo (direction) {
    this.sliderWrapper.style.transform = 'translateX(200px)';
    // this.downMarginSlide();
    // this.downScaleSlide();
    removeActiveClass();
    newActiveClass(this.slidesCollection, numberActiveClass()-1);
  }

  // get name() {
  //   return this.amountSlides;
  // }
}


const slider = new GalleryftSlider('slider-video-games');

console.log(slider.name);
console.log(slider.numberActiveClass());

// slider.removeActiveClass();
