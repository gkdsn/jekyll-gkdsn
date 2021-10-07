function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
moveImages = function() {
    $('.js-tablet-image').each(function(){
        let x = Math.floor(Math.random() * 100) + 1,
            y = Math.floor(Math.random() * 100) + 1,
            z = Math.floor(Math.random() * 500) + 1,
            translate = 'translate(calc('+ x +'vw - 50%), calc('+ y +'vh - 50%))'
        $(this).css("z-index", z);
        $(this).css("transform", translate);
    })
    sleep(2000).then(() => {
        moveImages();
    });
}
moveImages()
// $(document).on('click', 'main', moveImages)