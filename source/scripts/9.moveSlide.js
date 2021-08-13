let clientX;
let tmp;
let curent = 0;
const classActiveEl = 'active5';
const getX = () => event.changedTouches[0].pageX;

const handleMove = () => {
  const start = getX();

  slider5.removeEventListener('touchmove', handleMove);
  const deltaX = start - clientX;

  setTimeout(() => slider5.addEventListener('touchmove', handleMove), 50);

  translate(wrapper5, +deltaX);
}

const handleEnd = () => {
  const wrapper = wrapper5;
  const transform = transform5;
  const active = 'active5';
  let n = 0;
  const activeEl = document.querySelector(`.${active}`);
  activeEl.classList.remove(active);

  console.log()

  const setCurentLocal = (n) => setCurent('start', -transform * n);
  const setNewActiveEl = (n) => wrapper.getElementsByTagName('div')[n].classList.add(active);

  setCurent(tmp)
  console.log(curent)
  if (curent > 0 || curent < 0 && curent > -50) {
    n = 0;
  } else if (curent < -50 && curent > -150) {
    n = 1;
  } else if (curent < -150 && curent > -250) {
    n = 2;
  } else if (curent < -250 && curent > -350) {
    n = 3;
  } else if (curent < -350) {
    n = 4;
  }

  setCurentLocal(n);
  setNewActiveEl(n);
  newToSlide(wrapper, transform, n);
};

const setCurent = (val, addVal) => {
  if(val === 'start') {
    return curent = addVal;
  }

  return curent = curent + val
};

const translate = (wrapper, value) => {
  wrapper.style.transform = `translateX(${curent + value}vw)`;
  tmp = value;
}



const newToSlide = (wrapper, transform, num) => {
  setTranslate5(wrapper, transform * -num);
}



slider5.addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
  tmp = 0;
}, false);
slider5.addEventListener('touchmove', handleMove);
slider5.addEventListener('touchend', handleEnd);
