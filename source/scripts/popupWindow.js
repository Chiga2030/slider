const popUp = document.getElementById('pop-up-window');
const images = popUp.getElementsByTagName('img');


document.addEventListener('click', event => {
  if (event.target.classList[1] === 'slider__slide_tall') {
    showPopUp(event.target.src);
  }

  else if (event.target.classList.value === 'pop-up_to-right'
    || event.target.classList[0] === 'pop-up-window__image') {
    showSlide('right')
  }

  else if (event.target.classList.value === 'pop-up_to-left') {
    showSlide('left')
  }

  else if (popUp.style.visibility === 'visible' && event.target.parentNode.id !== 'pop-up-window') {
    Array.prototype.forEach.call(images, item => item.classList.remove('pop-up-window__image_active'))
    popUp.style.visibility = 'hidden'
  }

});

const showPopUp = (src) => {
  Array.prototype.forEach.call(images, item => item.classList.remove('pop-up-window__image_active'))
  let numbElemPopUp = src.split('.jpg');

  numbElemPopUp = numbElemPopUp[0].split('/')[numbElemPopUp[0].split('/').length-1] - 1;

  popUp.style.visibility = 'visible';
  images[numbElemPopUp].classList.add('pop-up-window__image_active');
}


const showSlide = (direction) => {
  const popUp = document.getElementById('pop-up-window');
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
      Array.prototype.forEach.call(images, item => item.classList.remove('pop-up-window__image_active'))
      popUp.style.visibility = 'hidden';
    }
  } else {
    if (images[position-1]) {
      images[position].classList.remove('pop-up-window__image_active')
      images[position].previousElementSibling.classList.add('pop-up-window__image_active')
    } else {
      Array.prototype.forEach.call(images, item => item.classList.remove('pop-up-window__image_active'))
      popUp.style.visibility = 'hidden';
    }
  }
}
