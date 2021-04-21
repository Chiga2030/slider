window.addEventListener('resize', () => {
  getInitTranslate();
  setInitTranslate();
});

document.addEventListener('click', event => {
  if (event.target.classList.value === 'btn-right') {
    slideTo('right');
  } else if (event.target.classList.value === 'btn-left') {
    slideTo('left');
  }
});

const slider = document.getElementById('my-slider');
const wrapper = slider.querySelector('.wrapper');
const sliderInfo = slider.querySelector('.slider-info');



const getWrapperTranslate = () => {
  if (document.documentElement.clientWidth > 768) {
    return 30;
  } else {
    return 0;
  }
}

const getTransformValue = () => {
  if (document.documentElement.clientWidth > 768) {
    return 21.8;
  } else if (document.documentElement.clientWidth > 425) {
    return 48;
  } else {
    return 100;
  }
}


const setTranslate = (el, amount) => {
  el.style.transform = `translateX(${amount}vw)`;
};

const searchActiveElement = () => {
  const slides = slider.querySelectorAll('.slider__slide');
}

const slideTo = direction => {
  if (direction === 'left') {
    setTranslate(wrapper, getTransformValue())
  } else if (direction === 'right') {
    setTranslate(wrapper, -getTransformValue())
  }
}

const sliderInfoValue = () => {
  let result;
  slides.forEach((element, index, array) => {
    if (element.classList.value.indexOf('active') + 1) {
      result = `${index + 1} / ${array.length}`;
    }
  });
  return result;
};
