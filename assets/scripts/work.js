const $footerTickerItem = $('.js-footer-item');
const $footerTickerWrapper = $('.js-footer-ticker');
const $textContainer = $('.js-background-colour');
const footerTickerDefault = $footerTickerWrapper.attr('data-default');

projectHover = function() {
    let projectName = $(this).attr('data-name'),
        tickerText = $(this).attr('data-desc'),
        colour = $(this).attr('data-colour'),
        $projectImages = $('#'+ projectName + ''),
        $projectImageMove = $projectImages.find('.js-project-wrapper');
    $footerTickerItem.html(tickerText)
    $footerTickerWrapper.css('animation-duration', '8s')
    $textContainer.css('background-color', colour)
    $textContainer.addClass('active');
    $projectImages.addClass('active');
    $('.js-work-link').removeClass('active');
    $(this).addClass('active');
    console.log(projectName, tickerText)
}

projectLeave = function() {
    if ($(this).hasClass('clicked')) {
        return;
    }
    $('.js-work-link').addClass('active');
    $textContainer.removeClass('active');
    $footerTickerItem.html(footerTickerDefault);
    $footerTickerWrapper.css('animation-duration', '3s')
    $textContainer.css('background-color', '')
    $('.js-project-container').removeClass('active');
}

projectHovering = function(e) {
    let width = $(this).width(),
        x = e.pageX - $(this).offset().left,
        raw = x / width * 100,
        percentage = Math.round(raw) + '%',
        projectName = $(this).attr('data-name'),
        $projectImages = $('#'+ projectName + ''),
        $projectImageMove = $projectImages.find('.js-project-wrapper');
    $projectImageMove.css('transform', 'translateX(' + percentage + ')');
}
projectBackgroundChange = function(e) {
    let colour = $(this).attr('data-bg-colour');
    $('body').css('background-color', colour);
    $(this).addClass('clicked');
    projectHover();
}

$(document).on('mouseenter', '.js-work-link', projectHover);
$(document).on('mouseleave', '.js-work-link', projectLeave);
$(document).on('mousemove', '.js-work-link', projectHovering);
$(document).on('click', '.js-work-link-active', projectBackgroundChange);