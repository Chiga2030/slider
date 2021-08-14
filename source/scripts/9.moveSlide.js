let clientX;
const classActiveEl = 'active5';
const activeEl = () => document.querySelector(`.${classActiveEl}`);
const getX = () => event.changedTouches[0].pageX;

const regExpSearchNum = /[^\d\-]/g;
const foundNum = () => parseInt(wrapper5.style.transform.replace(regExpSearchNum, ' '));


const curatorState = {
  curentSlide: 0,
  transform: transform5 === 48 ? 48 * 2 : 100,
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
  const deltaX = start - clientX;

  setTimeout(() => slider5.addEventListener('touchmove', handleMove), 50);

  console.log('deltaX ', deltaX)
  translate(wrapper5, +deltaX);
}

const handleEnd = () => {
  const curent = foundNum();
  console.log('curent ', curent)
  const wrapper = wrapper5;
  const transform = curatorState.transform === 96 ? 96/2 : 100;
  const active = 'active5';
  let n = 0;
  const setNewActiveEl = (n) => wrapper.getElementsByTagName('div')[n].classList.add(active);
  const halfItems = (arr) => arr.map(item => item / 2);
  const settings = {
    first: [0, -50],
    second: [-50, -150],
    third: [-150, -250],
    fourth: [-250, -350],
    fifth: [-350],
    getFirst: function() {
      if (curatorState.view === 'tablet') {
        return halfItems(this.first);
      }
      return this.first
    },
    getSecond: function() {
      if (curatorState.view === 'tablet') {
        return halfItems(this.second);
      }
      return this.second
    },
    getThird: function() {
      if (curatorState.view === 'tablet') {
        return halfItems(this.third);
      }
      return this.third
    },
    getFourth: function() {
      if (curatorState.view === 'tablet') {
        return halfItems(this.fourth);
      }
      return this.fourth
    },
    getFifth: function() {
      if (curatorState.view === 'tablet') {
        return halfItems(this.fifth);
      }
      return this.fifth
    },
  }

  activeEl().classList.remove(active);

  if (curent > settings.getFirst()[0] || curent < settings.getFirst[0] && curent > settings.getFirst[1]) {
    n = 0;
  } else if (curent < settings.getSecond()[0] && curent > settings.getSecond()[1]) {
    n = 1;
  } else if (curent < settings.getThird()[0] && curent > settings.getThird()[1]) {
    n = 2;
  } else if (curent < settings.getFourth()[0] && curent > settings.getFourth()[1]) {
    n = 3;
  } else if (curent < settings.getFifth()[0]) {
    n = 4;
  }

  setNewActiveEl(n);
  newToSlide(wrapper, transform, n);
  curatorState.setCurentSlide(n);
};


const translate = (wrapper, value) => {
  const curent = curatorState.getCurentSlide() * -(curatorState.view === 'tablet' ? curatorState.transform / 2 : curatorState.transform);
  wrapper.style.transform = `translateX(${curent + value}vw)`;
}


const newToSlide = (wrapper, transform, num) => {
  setTranslate5(wrapper, transform * -num);
}


const newSlideTo = (direction) => {
  const wrapper = wrapper5;
  const active = 'active5';
  const transform = curatorState.transform === 96 ? 96/2 : 100;
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
