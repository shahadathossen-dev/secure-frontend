/*---------------------------------------------
Template name :  Govpn
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Main Menu
    02: Sticky Nav
    03: Background Image
    04: Check Data
    05: Owl Carousel
    06: Changing svg color
    07: Google map
    08: Preloader
    09: Contact Form
    10: Back to top button
    11: Collapse
    12: Search Page
    13: Offcanvas Triggar
    14: Banner Mousemove
    15: Popup Video
    16: Service Point
    17: Accordion
    18: Feature Active
----------------------------------------------*/


(function ($) {
    "use strict";

    /*===================
    01: Main Menu
    =====================*/
    $('ul.nav li a[href="#"]').on('click', function (event) {
        event.preventDefault();
    });

    $('.header ul.nav > li > a').append('<span class="menu-mark"></span>')

    /* Menu Maker */
    $(".nav-wrapper").menumaker({
        title: '<span></span>',
        format: "multitoggle"
    });

    $($(window)).on('scroll', function () {
        if (!$('ul.nav').hasClass('open')) {
            $('#menu-button').removeClass('menu-opened');
        };
    });

    if ($(window).width() >= 992) {
        let $trigger = $('.menu-trigger');
        $trigger.on('click', function () {
            $(this).toggleClass('active');
            $('.main-menu-wrapper').toggleClass('show');
            $('.logo-holder').toggleClass('d-none');

            $('.nav-wrapper').toggleClass('active');
        })
    }

    /*========================
    02: Sticky Nav
    ==========================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-main.love-sticky").removeClass("sticky fadeInDown animated");
        }
        else {
            $(".header-main.love-sticky").addClass("sticky fadeInDown animated");
        }
    });

    /*========================
    03: Background Image
    ==========================*/
    var $bgImg = $('[data-bg-img]');
    $bgImg.css('background-image', function () {
        return 'url("' + $(this).data('bg-img') + '")';
    }).removeAttr('data-bg-img').addClass('bg-img');

    /*==================================
    04: Check Data
    ====================================*/
    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };

    /*==================================
    05: Owl Carousel
    ====================================*/
    var $owlCarousel = $('.owl-carousel');
    $owlCarousel.each(function () {
        var $th = $(this);

        $th.owlCarousel({
            items: checkData($th.data('owl-items'), 1),
            margin: checkData($th.data('owl-margin'), 0),
            loop: checkData($th.data('owl-loop'), true),
            smartSpeed: 450,
            autoplay: checkData($th.data('owl-autoplay'), true),
            autoplayTimeout: checkData($th.data('owl-speed'), 5000),
            center: checkData($th.data('owl-center'), false),
            animateIn: checkData($th.data('owl-animate-in'), false),
            animateOut: checkData($th.data('owl-animate-out'), false),
            nav: checkData($th.data('owl-nav'), false),
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: checkData($th.data('owl-dots'), false),
            stagePadding: checkData($th.data('owl-stage-padding'), false),
            autoWidth: checkData($th.data('owl-auto-width'), false),
            responsive: checkData($th.data('owl-responsive'), {})
        });
    });

    //Slider btn push icon
    $('.testimonial-slider.owl-carousel').find('.owl-prev').html('<img src="assets/img/icons/slide-left.svg" alt="" class="svg">');
    $('.testimonial-slider.owl-carousel').find('.owl-next').html('<img src="assets/img/icons/slide-right.svg" alt="" class="svg">');

    /*==================================
    06: Changing svg color
    ====================================*/
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /*==================================
    07: Google map
    ====================================*/
    var $map = $('[data-trigger="map"]'),
        $mapOps;

    if ($map.length) {
        // Map Options
        $mapOps = $map.data('map-options');

        // Map Initialization
        window.initMap = function () {
            $map.css('min-height', '590px');
            $map.each(function () {
                var $th = $(this), map, lat, lng, zoom;

                $mapOps = $th.data('map-options');
                lat = parseFloat($mapOps.latitude, 10);
                lng = parseFloat($mapOps.longitude, 10);
                zoom = parseFloat($mapOps.zoom, 10);

                map = new google.maps.Map($th[0], {
                    center: { lat: lat, lng: lng },
                    zoom: zoom,
                    scrollwheel: false,
                    disableDefaultUI: true,
                    zoomControl: true,
                });

                map = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: map,
                    animation: google.maps.Animation.DROP,
                    draggable: false
                });

            });
        };
        initMap();
    };

    /*==================================
    08: Preloader
    ====================================*/
    // $(window).on('load', function () {
    //     $('.preloader').fadeOut(1000);
    // });

    /*==================================
    09: Contact Form
    ====================================*/
    $('.contact-form-wrap').on('submit', 'form', function (e) {
        e.preventDefault();

        var $el = $(this);

        $.post($el.attr('action'), $el.serialize(), function (res) {
            res = $.parseJSON(res);
            $el.parent('.contact-form-wrap').find('.form-response').html('<span>' + res[1] + '</span>');
        });
    });

    /*============================================
    10: Back to top button
    ==============================================*/
    var $backToTopBtn = $('.back-to-top');

    if ($backToTopBtn.length) {
        var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

        backToTop();

        $(window).on('scroll', function () {
            backToTop();
        });

        $backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*==================================
    11: Collapse
    ====================================*/
    function collapse() {
        $(document.body).on('click', '[data-toggle="collapse"]', function (e) {
            var target = '#' + $(this).data('target');

            $(this).toggleClass('collapsed');
            $(target).slideToggle();

            e.preventDefault();
        });
    }
    collapse();

    /*==================================
    12: Search Page
    ====================================*/
    $('.search-toggle-btn').on('click', function() {
        $('.full-page-search').addClass('show')
    });

    $('.search-close-btn').on('click', function() {
        $('.full-page-search').removeClass('show')
    });

    /*==================================
    13: Offcanvas Triggar
    ====================================*/
    $('.offcanvas-trigger').on('click', function() {
        $('.offcanvas-wrapper, .offcanvas-overlay').addClass('show')
    });

    $('.offcanvas-overlay, .offcanvas-close').on('click', function() {
        $('.offcanvas-wrapper, .offcanvas-overlay').removeClass('show')
    });


    /*==================================
    14: Banner Mousemove
    ====================================*/
    var object1 = $('.man2, .man4, .man1, .man3');

    var layer = $('.layer');

    layer.on('mousemove', function(e) {
        var valueX = (e.pageX * -1 / 180);
        var valueY = (e.pageY * -1 / 180);

        object1.css({
            'transform':'translate3d('+valueX+ 'px, ' + valueY+'px,0)'
        });
    });

    /*==================================
    15: Popup Video
    ====================================*/
    $(".mfp-iframe, .video-btn").magnificPopup({type:"video"});

    /*==================================
    16: Countdown Timer
    ====================================*/
    $('#countdown').countdown({
        date: '08/16/2021 23:59:59'
    });

    /*==================================
    17: Accordion
    ====================================*/
    var accordionToggle = $('[data-accordion-tab="toggle"]');
    accordionToggle.each(function(){
        $(this).children('.accordion-content').hide();
        $(this).on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
            if ($(this).hasClass('active')){
                $(this).children('.accordion-content').slideDown(500).parents('[data-accordion-tab="toggle"]').siblings().children('.accordion-content').slideUp(500);
            }
        });
        if($(this).hasClass('active')){
            $(this).children('.accordion-content').show();
        }
    });

    /*==================================
    18: Feature Active
    ====================================*/
    $('.features .single-feature').on('mouseover', function() {
        $('.features .single-feature').removeClass('active')
        $(this).addClass('active')
    })


}(jQuery));
