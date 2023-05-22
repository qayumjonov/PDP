$('#myCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,


    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },

    }
});
$('#carouselTwo').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,


    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },

    }
});


