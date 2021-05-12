const createNewSlider = sliderNameById => {
  const slider = new GalleryftSlider(sliderNameById);

  slider.slider.addEventListener('click', event => {
    if (event.target.type === 'button') {
      slider.slideTo(event.target.dataset.direction);
    } else if (event.target.parentNode.dataset.type === 'slide') {
      slider.slideTo(null, event.target.parentNode);
    }
  });

  window.addEventListener(
    'orientationchange', () => setTimeout(
      () => slider.initDevice(), 200
    )
  );
};

createNewSlider('slider-video-games');
