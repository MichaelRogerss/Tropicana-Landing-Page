const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');


const selectors = document.querySelectorAll('.selector');

Array.from(selectors).forEach((selector, index) => {
  selector.addEventListener('click', () => {
    selectors.forEach(selector2 => {
        selector2.classList.remove("isactive");
    })
    slides.forEach(slide => {
        slide.classList.remove('activeslide');
    })
    selector.classList.add("isactive");
    const slideTo = slides[index];
    slides[index].classList.add('activeslide');


    if(index == 0){
        document.getElementsByClassName("navmiddle")[0].classList.remove("dark")
        document.getElementsByClassName("shopCart")[0].classList.remove("dark")
        document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--orange)'
    }else if(index == 1){   
        document.getElementsByClassName("navmiddle")[0].classList.add("dark")
        document.getElementsByClassName("shopCart")[0].classList.add("dark")
        document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--pina)'
    }
    slider.scroll({
        left: slideTo.offsetLeft,
        behavior: 'smooth'
      });
  });
});