mainswiper.on('transitionEnd', function () {
    // Change the description to the current slide
    let descText = $('.main-swiper-slide.swiper-slide-active').data('desc');
    if (descText === "") {
        descText = $('.main-swiper').data('desc');
    }
    $('.js-footer-item').html(descText);
});