$(document).ready(function () {
    $('#owl-one').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });
    $('#owl-two').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        animateOut: 'fadeOut'
    });
});