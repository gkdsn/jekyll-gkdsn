// Page Transition
// const swup = new Swup();

colourSwitch = function(e){
    e.preventDefault();
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
        $.cookie('dark', 'true', { expires: 1, path: '/' })
    }
    else {
        $.cookie('dark', 'false', { expires: 1, path: '/' })
    }
}
$(document).on('click', '.js-colour-switch', colourSwitch);


$(function() {
    $('body').removeClass('transition-in')
});

//TRANSITION FUNCTION
pageTransition = function(e){
    let 
        goTo = this.getAttribute("href"),
        current = window.location.pathname;
    if (goTo == current) {
        e.preventDefault();
        return;
    }
    else {
        e.preventDefault();
        $('body').addClass('transition-out')
            setTimeout(function(){
                window.location = goTo;
            },1600);
        }
}
navLink = function(e) {
    $('.nav-link').removeClass('current')
    $(this).addClass('current');
    $('body').css('background-color', '')
}
// Fix for Safari Reloading
window.addEventListener("pageshow", function(evt){
    if(evt.persisted){
        setTimeout(function(){
            window.location.reload();
        },10);
    }
}, false);

$(document).on('click', '.nav-link:not(.no-transition)', navLink);
$(document).on('click', 'a:not([href^="http://"]):not([href^="https://"]):not(.no-transition)', pageTransition);