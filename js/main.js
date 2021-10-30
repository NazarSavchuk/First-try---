const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slide',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



document.addEventListener('DOMContentLoaded', () => {
        const mainSlider = document.querySelector('.slider');
        const header = document.querySelector('.header');
        const scrollAnimateItem = document.querySelectorAll('.scrollAnimateItem');


        const scrollAnimation = () => {
            let windowPoint = (window.innerHeight * 0.9) + window.scrollY;
            console.log(windowPoint);
            scrollAnimateItem.forEach(el => {
                let scrollOffset = el.offsetTop + (el.offsetHeight * 0.2);
                if (windowPoint >= scrollOffset) {
                    el.classList.add('animation-class');
                } else {
                    el.classList.remove('animation-class');
                }
            });
        };


        const headerFixed = () => {
            let scrollTop = window.scrollY;
            let mainSliderCenter = mainSlider.offsetHeight / 2;
            if (scrollTop >= mainSliderCenter){
                header.classList.add('fixed');
                mainSlider.style.marginTop = `${header.offsetHeight}px`;
            } else {
                header.classList.remove('fixed');
                mainSlider.style.marginTop = `0px`;
            }
        }

        headerFixed();
        scrollAnimation();
        window.addEventListener('scroll', () => {
            headerFixed();        
            scrollAnimation();    
        });
});




