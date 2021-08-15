let clientX;
let deltaX;
const classActiveEl = 'active5';
const activeEl = () => document.querySelector(`.${classActiveEl}`);
const getX = () => event.changedTouches[0].pageX;

const regExpSearchNum = /[^\d\-]/g;
const foundNum = () => parseInt(wrapper5.style.transform.replace(regExpSearchNum, ' '));


const curatorState = {
  curentSlide: 0,
  transform: transform5 === 48 ? 48 * 2 : transform5 === 21.8 ? 21.8 : 100,
  view: transform5 === 48 ? 'tablet' : transform5 === 100 ? 'mobile' : 'desctop',
  getCurentSlide: function() {
    return this.curentSlide;
  },
  setCurentSlide: function(n) {
    return this.curentSlide = n;
  },
}


const handleMove = () => {
  const start = getX();

  slider5.removeEventListener('touchmove', handleMove);
  deltaX = start - clientX;

  setTimeout(() => slider5.addEventListener('touchmove', handleMove), 50);
}


const defineSlide = () => {
  deltaX > 50 ? newSlideTo('left') : deltaX < -50 ? newSlideTo('right') : null;
}

const handleEnd = () => {
  defineSlide()

  setTimeout(() => wrapper5.classList.remove('willChange'), 2000)
};


const newToSlide = (wrapper, transform, num) => {
  setTranslate5(wrapper, transform * -num);
}


const newSlideTo = (direction) => {
  const wrapper = wrapper5;
  const active = 'active5';
  const transform = curatorState.transform === 96 ? 96/2 : curatorState.view === 'desctop' ? curatorState.transform : 100;
  let n = curatorState.getCurentSlide();

  wrapper.children[n].classList.remove(active)
  if(direction === 'right') {
      if(n < wrapper.children.length - 1) {
        wrapper.children[n+1].classList.add(active)
        curatorState.setCurentSlide(n+1)
      } else {
        wrapper.children[0].classList.add(active)
        curatorState.setCurentSlide(0)
      }
    if(n >= wrapper.children.length - 1) {
      n = 0;
    } else {
      n = n + 1;
    }
  } else if (direction === 'left') {
    if(n > 0) {
      wrapper.children[n-1].classList.add(active)
      curatorState.setCurentSlide(n-1)
    } else {
      wrapper.children[wrapper.children.length-1].classList.add(active)
      curatorState.setCurentSlide(wrapper.children.length-1)
    }

    if(n < 1) {
      n = wrapper.children.length-1;
    } else {
      n = n - 1;
    }
  }

  newToSlide(wrapper, transform, n)
}


wrapper5.addEventListener('touchstart', function(e) {
  wrapper5.classList.add('willChange');
  deltaX = 0;
  clientX = e.touches[0].clientX;
}, false);
wrapper5.addEventListener('touchmove', handleMove);
wrapper5.addEventListener('touchend', handleEnd);
