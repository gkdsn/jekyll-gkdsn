// Page Transition
// const swup = new Swup();



colourSwitch = function(){
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
        $.cookie('dark', 'true', { expires: 1, path: '/' })
    }
    else {
        $.cookie('dark', 'false', { expires: 1, path: '/' })
    }
}
$(document).on('click', '.js-colour-switch', colourSwitch);