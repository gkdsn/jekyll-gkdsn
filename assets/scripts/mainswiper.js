const mainswiper = new Swiper('.main-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    speed: 500,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-nav-btn.next',
        prevEl: '.swiper-nav-btn.prev',
    }
});