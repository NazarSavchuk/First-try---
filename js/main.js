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

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    scrollTrigger: {
        trigger: ".square",
        toggleActions: "restart none none none"
    },
    x: 400,
    rotation: 360,
    duration: 3,
})