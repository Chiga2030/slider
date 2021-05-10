class GalleryftSlider {
  wrapperClassName = '.galleryft-slider__wrapper';
  slideClassName = '.galleryft-slider__slide';
  activeSlideClassName = 'galleryft-slider__slide_active';
  navigationClassName = 'galleryft-slider__navigation';
  marginSlide = '1vw';
  marginActiveSlide = '1vw 8.5vw';

  constructor (nameById) {
    this.slider = document.getElementById(nameById);
    this.sliderWrapper = this.slider.querySelector(
      this.wrapperClassName
    );
    this.activeSlide = this.sliderWrapper.querySelector(
      `.${this.activeSlideClassName}`
    );
    this.slidesCollection = this.sliderWrapper.children;
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
    collection[this.numberActiveClass()].classList.remove(
      this.activeSlideClassName
    );
  }

  newActiveClass (
    collection = this.sliderWrapper.children,
    numberNewActiveClass
  ) {
    collection[numberNewActiveClass].classList.add(this.activeSlideClassName);
  }

  getIndexForNewActiveClass (direction) {
    if (direction === 'left') {
      return this.numberActiveClass() - 1;
    } return this.numberActiveClass() + 1;
  }

  slideTo (direction) {
    const indexForNewActiveClass = this.getIndexForNewActiveClass(direction);


    this.removeActiveClass();
    this.newActiveClass(this.slidesCollection, indexForNewActiveClass);
  }
}
