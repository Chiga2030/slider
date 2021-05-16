class GalleryftSlider {
  wrapperClassName = '.galleryft-slider__wrapper';
  slideClassName = '.galleryft-slider__slide';
  activeSlideClassName = 'galleryft-slider__slide_active';
  device = this.checkDevice();

  constructor (nameById) {
    this.slider = document.getElementById(nameById);
    this.sliderWrapper = this.slider.querySelector(
      this.wrapperClassName
    );
    this.activeSlide = this.sliderWrapper.querySelector(
      `.${this.activeSlideClassName}`
    );
    this.slidesCollection = this.sliderWrapper.children;
    this.slide = this.slider.querySelector(
      this.slideClassName
    );
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
    this.sliderWrapper.style.transform = `translate3d(
      ${amount}vw, 0, 0
    )`;
  }

  checkDevice () {
    if (document.documentElement.clientWidth < 576) {
      return {
        type: 'mobile',
        a0: -6,
        difference: -97,
      };
    } return {
      type: 'desctop',
      a0: 32.5,
      difference: -20,
    };
  }

  initDevice () {
    this.device = this.checkDevice();
    this.moveWrapper(this.progression(this.numberActiveClass()));
  }

  progression (position) {
    const a0 = this.device.a0;
    const difference = this.device.difference;
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
        this.moveWrapper(this.progression(indexForNewActiveClass))
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
