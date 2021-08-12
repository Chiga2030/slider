const getX = () => event.changedTouches[0].pageX;


var clientX;
slider5.addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
}, false);


const handleMove = () => {
  const start = getX();

  slider5.removeEventListener('touchmove', handleMove);

  setTimeout(() => slider5.addEventListener('touchmove', handleMove), 200);
  console.log(start - clientX);
}


slider5.addEventListener('touchmove', handleMove);


const translate = (wrapper, value) => {
  wrapper.style.transform = `translateX(${value}vw)`;
}



