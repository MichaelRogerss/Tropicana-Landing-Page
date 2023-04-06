const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let count = 0;

setInterval(() => {
  count = (count + 1) % slides.length;

  slides[count].classList.add('activeslide');

  const slideTo = slides[count];
  slider.scroll({
    left: slideTo.offsetLeft,
    behavior: 'smooth'
  });

  
  console.log(count)

  
  if(count == 1){
    slides[0].classList.remove('activeslide');
    document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--pina)'
  }else{
    slides[1].classList.remove('activeslide');
    document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--orange)'
  }
}, 5000);