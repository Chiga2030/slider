const slider = document.querySelector('.slider-curator');

const getX = () => event.changedTouches[0].pageX;


var clientX;

slider.addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
}, false);



const handleMove = () => {
  const start = getX();
  console.log('start ', start);

  slider.removeEventListener('touchmove', handleMove);

  setTimeout(() => slider.addEventListener('touchmove', handleMove), 200);
  console.log(start - clientX);
}




slider.addEventListener('touchmove', handleMove);
