$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

$('.owl-carousel').owlCarousel({
    autoplay: true,
    items: 1,
    nav: true,
    loop: true
});