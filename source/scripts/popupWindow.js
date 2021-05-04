const popUp = document.getElementById('pop-up-window');
const images = popUp.getElementsByTagName('img');
const navigation3 = document.querySelector('.navigation3');

const clientWidth = () => document.documentElement.clientWidth;

document.addEventListener('click', event => {
  if (event.target.classList[1] === 'slider__slide_tall') {
    showPopUp(event.target.src);
    navigation3.style.visibility = 'hidden';
    sliderInfo3.style.visibility = 'hidden';
  }

  else if (event.target.classList.value === 'pop-up_to-right'
    || event.target.classList[0] === 'pop-up-window__image') {
    showSlide('right')
  }

  else if (event.target.classList.value === 'pop-up_to-left') {
    showSlide('left')
  }

  else if (popUp.style.visibility === 'visible' && event.target.parentNode.id !== 'pop-up-window') {
    hidePopUp();
  }

  else if (event.target.classList.value === 'close-btn') {
    hidePopUp();
  }

});

const showPopUp = (src) => {
  let numbElemPopUp = src.split('.jpg');
  numbElemPopUp = numbElemPopUp[0].split('/')[numbElemPopUp[0].split('/').length-1] - 1;
  if (clientWidth() <= 425) {
    document.querySelector('#rec305615005 .tn-elem[data-elem-id="1619861436534"]').style.left = '0';
  }
  document.querySelector('#rec305615005 .tn-elem[data-elem-id="1619861436534"]').style.top = '0';

    // document.body.style.overflow = 'hidden';
  Array.prototype.forEach.call(images, item => item.classList.remove('pop-up-window__image_active'))


  popUp.style.visibility = 'visible';
  images[numbElemPopUp].classList.add('pop-up-window__image_active');

  const activeElem = popUp.querySelector('.pop-up-window__image_active');
  if (clientWidth() <= 425) {
    const imgHeight = activeElem.height;
    document.querySelector('#rec305615005 .t396__artboard').style.height = `${imgHeight}px`;
  } else {
    document.querySelector('#rec305615005 .t396__artboard').style.height = '100vh';
  }
}


const showSlide = (direction) => {

  // const popUp = document.getElementById('pop-up-window');
  const images = popUp.getElementsByTagName('img');

  const getPosition = () => {
    let i = 0;

    while( i <= images.length ) {
      if (images[i].classList[1]) {
        break;
      }
        i++;
    }
        return i;
  }

  let position = getPosition();

  if (direction === 'right') {
    if (images[position+1]) {
      images[position].classList.remove('pop-up-window__image_active')
      images[position].nextElementSibling.classList.add('pop-up-window__image_active')
    } else {
      hidePopUp();
    }
  } else {
    if (images[position-1]) {
      images[position].classList.remove('pop-up-window__image_active')
      images[position].previousElementSibling.classList.add('pop-up-window__image_active')
    } else {
      hidePopUp();
    }
  }

  const activeElem = popUp.querySelector('.pop-up-window__image_active');
  if (clientWidth() <= 425) {
    const imgHeight = activeElem.height;
    document.querySelector('#rec305615005 .t396__artboard').style.height = `${imgHeight}px`;
  }
}

const hidePopUp = () => {
  // document.body.style.overflow = 'auto';
  Array.prototype.forEach.call(images, item => item.classList.remove('pop-up-window__image_active'))
  popUp.style.visibility = 'hidden';
  navigation3.style.visibility = 'visible';
  if (clientWidth() < 1024) {
    sliderInfo3.style.visibility = 'visible';
  }

  document.querySelector('#rec305615005 .tn-elem[data-elem-id="1619861436534"]').style.top = '709px';

  if (clientWidth() <= 320) {
    document.querySelector('#rec305615005 .t396__artboard').style.height = '448px';
  } else if (clientWidth() <= 375) {
    document.querySelector('#rec305615005 .t396__artboard').style.height = '550px';
  } else if (clientWidth() <= 425) {
    document.querySelector('#rec305615005 .t396__artboard').style.height = '600px';
  } else if (clientWidth() === 768) {
  document.querySelector('#rec305615005 .t396__artboard').style.height = '600px';
  } else if (clientWidth() === 1024) {
  document.querySelector('#rec305615005 .t396__artboard').style.height = '470px';
  } else {
    document.querySelector('#rec305615005 .t396__artboard').style.height = '650px';
  }
}
