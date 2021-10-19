window.onload = function(){
    let url = window.location.href;
    if(url.includes('?success')){
        $('.enquiries-right').addClass('active')
    }
}