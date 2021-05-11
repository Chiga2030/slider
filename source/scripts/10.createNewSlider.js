const createNewSlider = sliderNameById => {
  const slider = new GalleryftSlider(sliderNameById);

  slider.slider.addEventListener('click', event => {
    if (event.target.type === 'button') {
      slider.slideTo(event.target.dataset.direction);
    } else if (event.target.parentNode.dataset.type === 'slide') {
      slider.slideTo(null, event.target.parentNode);
    }
  });
};

createNewSlider('slider-video-games');
