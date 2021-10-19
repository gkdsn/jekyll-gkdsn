swiper.on('transitionEnd', function () {
    // Change the description to the current slide
    let descText = $('.swiper-slide-active').data('desc');
    $('.js-footer-item').html(descText);
});