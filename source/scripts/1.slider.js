class GalleryftSlider {
  wrapperClassName = '.galleryft-slider__wrapper';
  constructor (nameById) {
    this.slider = document.getElementById(nameById);
    this.sliderWrapper = this.slider.querySelector(
      this.wrapperClassName
    );
  }

  slideTo (direction) {
    this.sliderWrapper.style.transform = 'translateX(200px)';
  }

  // get name() {
  //   return this.getSlider();
  // }
}


const slider = new GalleryftSlider('slider-video-games');

console.log(slider.name);
