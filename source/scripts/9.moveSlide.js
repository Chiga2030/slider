let clientX;
const classActiveEl = 'active5';
const activeEl = () => document.querySelector(`.${classActiveEl}`);
const getX = () => event.changedTouches[0].pageX;

const regExpSearchNum = /[^\d\-]/g;
const foundNum = () => parseInt(wrapper5.style.transform.replace(regExpSearchNum, ' '));


const curatorState = {
  curentSlide: 0,
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
  const deltaX = start - clientX;

  setTimeout(() => slider5.addEventListener('touchmove', handleMove), 50);

  translate(wrapper5, +deltaX);
}

const handleEnd = () => {
  const curent = foundNum();
  const wrapper = wrapper5;
  const transform = transform5;
  const active = 'active5';
  let n = 0;
  const setNewActiveEl = (n) => wrapper.getElementsByTagName('div')[n].classList.add(active);


  activeEl().classList.remove(active);

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

  setNewActiveEl(n);
  newToSlide(wrapper, transform, n);
  curatorState.setCurentSlide(n);
};


const translate = (wrapper, value) => {
  const curent = curatorState.getCurentSlide() * -100;
  wrapper.style.transform = `translateX(${curent + value}vw)`;
}


const newToSlide = (wrapper, transform, num) => {
  setTranslate5(wrapper, transform * -num);
}


const newSlideTo = (direction) => {
  const wrapper = wrapper5;
  const active = 'active5';
  const transform = transform5;
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
  } else {
    if(n > 0) {
      wrapper.children[n-1].classList.add(active)
      curatorState.setCurentSlide(n-1)
    } else {
      wrapper.children[wrapper.children.length-1].classList.add(active)
      curatorState.setCurentSlide(wrapper.children.length-1)
    }

    if(n <= 1) {
      n = wrapper.children.length-1;
    } else {
      n = n - 1;
    }
  }

  newToSlide(wrapper, transform, n)
}


wrapper5.addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
}, false);
wrapper5.addEventListener('touchmove', handleMove);
wrapper5.addEventListener('touchend', handleEnd);
