class GalleryftSlider {
  wrapperClassName = '.galleryft-slider__wrapper';
  slideClassName = '.galleryft-slider__slide';
  activeSlideClassName = 'galleryft-slider__slide_active';

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
    numberNewActiveClass,
    node
  ) {
    if (collection !== null || numberNewActiveClass !== null) {
      return collection[numberNewActiveClass].classList.add(
        this.activeSlideClassName
      );
    } return node.classList.add(this.activeSlideClassName);
  }

  getIndexForNewActiveClass (direction) {
    if (direction === 'left') {
      return this.numberActiveClass() - 1;
    } return this.numberActiveClass() + 1;
  }

  moveWrapper (amount) {
    this.sliderWrapper.style.transform = `translateX(
      ${amount}vw
    )`;
  }

  progression (position) {
    const a0 = 32.5;
    const difference = -20;
    return a0 + (difference * position);
  }


  slideTo (direction, slide) {
    if (direction) {
      const indexForNewActiveClass = this.getIndexForNewActiveClass(direction);

      if (indexForNewActiveClass >= 0
      &&
      indexForNewActiveClass < this.slidesCollection.length) {
        this.removeActiveClass();
        this.newActiveClass(this.slidesCollection, indexForNewActiveClass);
        this.moveWrapper(this.progression(indexForNewActiveClass));
      }
    } else if (slide) {
      const indexForNewActiveClass = [].indexOf.call(
        this.sliderWrapper.children,
        slide
      );

      this.removeActiveClass();
      this.newActiveClass(null, null, slide);
      this.moveWrapper(this.progression(indexForNewActiveClass));
    }
  }
}
