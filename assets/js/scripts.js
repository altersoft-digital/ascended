function scrollToTop() {
    window.scrollTo(0, 0);
}


let btn = document.querySelector('');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});