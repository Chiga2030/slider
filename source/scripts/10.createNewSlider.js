const createNewSlider = sliderNameById => {
  const slider = new GalleryftSlider(sliderNameById);

  slider.slider.addEventListener('click', event => {
    if (event.target.type === 'button') {
      slider.slideTo(event.target.dataset.direction);
    }
  });
};

createNewSlider('slider-video-games');
