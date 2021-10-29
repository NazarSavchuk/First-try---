$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:300,
        autoplay:true,
        autoplaySpeed:3000,
        
    });
})

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.querySelector('.slider');
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let mainSliderCenter = mainSlider.offsetHeight / 2;
        console.log(mainSliderCenter);
        console.log(scrollTop);

        if (scrollTop >= mainSliderCenter){
            header.classList.add('fixed');
            mainSlider.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            mainSlider.style.marginTop = `0px`;
        }
    });
});