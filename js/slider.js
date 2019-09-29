window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    
let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    interval = runInterval();


    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1 ){
            slideIndex = slides.length;
        }
        
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    }
    setTimeout(showSlides, 500);

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
        clearInterval(interval);
        interval = runInterval();
    });

    next.addEventListener('click', () => {
        plusSlides(1);
        clearInterval(interval);
        interval = runInterval();
    });
       
      function runInterval() {
        return setInterval(function() {
            next.click();
        }, 4000);
      }
});