const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');


const selectors = document.querySelectorAll('.selector');

var activeSlide = 0;
document.getElementById("im2").classList.add("show")
Array.from(selectors).forEach((selector, index) => {
  selector.addEventListener('click', () => {

    if(index != activeSlide){
        activeSlide = index;
        selectors.forEach(selector2 => {
            selector2.classList.remove("isactive");
        })
        slides.forEach(slide => {
            slide.classList.remove('activeslide');
        })
        selector.classList.add("isactive");
        const slideTo = slides[index];
        slides[index].classList.add('activeslide');

        document.getElementById("im2").classList.remove("show")
        if(index == 0){
            document.getElementById("im2").classList.add("show")
            document.getElementsByClassName("navmiddle")[0].classList.remove("dark")
            document.getElementsByClassName("shopCart")[0].classList.remove("dark")
            document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--orange)'
        }else if(index == 1){   
            document.getElementsByClassName("navmiddle")[0].classList.add("dark")
            document.getElementsByClassName("shopCart")[0].classList.add("dark")
            document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--pina)'
        }else if(index == 2){
            document.getElementsByClassName("navmiddle")[0].classList.remove("dark")
            document.getElementsByClassName("shopCart")[0].classList.remove("dark")
            document.getElementsByClassName("sliderFrame")[0].style.backgroundColor = 'var(--mango)'
        }
        
        const elements = document.querySelectorAll('.leaf');

        
        elements.forEach(element => {
        
        const currentRotation = getComputedStyle(element).getPropertyValue('transform');

        
        const match = currentRotation.match(/matrix\((.*)\)/);
        const matrix = match ? match[1].split(',') : [0, 0, 0, 0, 0, 0];
        const angle = Math.round(Math.atan2(matrix[1], matrix[0]) * (180 / Math.PI));

        
        element.style.transform = `rotate(${angle + 80}deg)`;
        });
        slider.scroll({
            left: slideTo.offsetLeft,
            behavior: 'smooth'
        });
    }
    
  });
});