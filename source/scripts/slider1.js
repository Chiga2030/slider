// window.addEventListener('resize', () => {
//   getInitTranslate();
//   setInitTranslate();
// });

document.addEventListener('click', event => {
  if (event.target.classList.value === 'btn-right') {
    slideTo('right', wrapper);
  } else if (event.target.classList.value === 'btn-left') {
    slideTo('left', wrapper);
  }
});

const slider = document.getElementById('my-slider');
const wrapper = slider.querySelector('.wrapper');
const sliderInfo = slider.querySelector('.slider-info');


const getActiveEl = (searchInEl) => {
  let result;

  searchInEl.querySelectorAll('.slider__slide').forEach(
    (item, index) => {
      if (item.classList.value.indexOf('active') + 1) {
        result = index;
        return false;
      }
    }
  );
  console.log(result)
  return result
}


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
    return 16;
  } else {
    return 50;
  }
}


const setTranslate = (el, amount) => {
  el.style.transform = `translateX(${amount}vw)`;
};


const setNewActiveEl = (searchInEl, direction) => {
  searchInEl.querySelectorAll('.slider__slide').forEach(
    (item, index, array) => {
      if (item.classList.value.indexOf('active') + 1) {
        item.classList.remove('active');
        // return false;

        // console.log('index ', array)

        if (direction === 'left') {
          array[index - 1].classList.add('active')
        } else if (direction === 'right') {
          console.log('index', index)
          array[index+1].classList.add('active');
        }
      }
  })
}

const slideTo = (direction, translateEl) => {
  const translateValue = getActiveEl(translateEl) + 1;

  if (direction === 'left') {
    setTranslate(wrapper, getTransformValue() * translateValue);
    setNewActiveEl(wrapper, direction)
  } else if (direction === 'right') {
    setTranslate(wrapper, -getTransformValue() * translateValue);
    setNewActiveEl(wrapper, direction)
  }
}
