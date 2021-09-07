$(document).ready(function () {

    //Owl carousel:
    $("#categories-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        navText: ["prev", "next"],
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    $('#modal_open').click(function () {
        $('#modal_open').modal('show');
        e.stopPropagation();
    });

    $(window).scroll(function () {
        var $button = $('#scroll_to_top');

        if ($(window).scrollTop() > 300) {
            $button.addClass('show');
        } else {
            $button.removeClass('show');
        }
    });

    $('#scroll_to_top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });

    $("#myNav").on("click", 'a', function (e) {
        e.preventDefault();
        $("#myNav").find('a').removeClass("active");
        $(this).addClass("active");
    });

    $(window).on("scroll", function () {

        var $window = $(window),
            scrollTop = $window.scrollTop(),
            $progressBar = $('#my_bar'),
            windowHeight= $window.height(),
            htmlHeight = $('html').height(),
            resultHeight = htmlHeight - windowHeight;

        var scrollPercent = scrollTop / resultHeight;

        $progressBar.css({width: scrollPercent * 100 + '%'});
    });

});

