mainswiper.on('transitionEnd', function () {
    // Change the description to the current slide
    let descText = $('.main-swiper-slide.swiper-slide-active').data('desc');
    if (descText === "") {
        descText = $('.main-swiper').data('desc');
    }
    $('.js-footer-item').html(descText);
});

pageTransitionProject = function(e){
    $('body').css('background-color', '')
}

$(document).on('click', 'a:not([href^="http://"]):not([href^="https://"]):not(.no-transition)', pageTransitionProject);