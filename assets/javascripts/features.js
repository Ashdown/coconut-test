(function(window) {
    var helpers = {
        getPageScrollTop: function () {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        },

        getPageScrollBottom: function () {
            return this.getPageScrollTop() + window.innerHeight;
        }
    };
    window.helpers = helpers;
})(window);

(function(helpers){

    'use strict';

    var $featuresList = $('.features-list'),
        initialSlide = Math.floor($('.feature-item').size() / 2),
        $navLinks = $('.nav-link');

    function checkForFadeIn() {

        var pageScrollBottom = helpers.getPageScrollBottom(),
            bottomPositionOfList =  $navLinks.offset().top + $navLinks.height() / 2;

        function fadeInSlides(offset) {
            window.setTimeout(function() {
                $navLinks.eq(initialSlide-offset).addClass('visible');
                $navLinks.eq(initialSlide+offset).addClass('visible');
                if((++offset * 2) < $navLinks.size()) {
                    fadeInSlides(offset);
                }
            }, 300);
        }

        if( pageScrollBottom >= bottomPositionOfList) {

            $navLinks.eq(initialSlide).addClass('visible');

            fadeInSlides(1);

        }

    }

    $navLinks.on('mouseover', function() {
        $(this).addClass('hover');
    });

    $navLinks.on('mouseout', function() {
        $(this).removeClass('hover');
    });

    $navLinks.on('click', function(event) {
        event.preventDefault();
        $featuresList.slick('slickGoTo', $('.nav-link').index(this));
    });

    $featuresList.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $navLinks.removeClass('selected').removeClass('hover');
        $navLinks.eq(nextSlide).addClass('selected');
    });

    $featuresList.on('afterChange', function() {
        $navLinks.removeClass('hover');
    });

    //detect when this scrolls into view

    window.addEventListener('scroll', checkForFadeIn);

    $featuresList.slick({
        mobileFirst: true,
        arrows: false,
        infinite: false,
        dots: false,
        slide: '.feature-item',
        initialSlide: initialSlide,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: true,
                    cssEase: 'linear'
                }
            }
        ]
    });

    $navLinks.eq(initialSlide).addClass('selected');

    checkForFadeIn();

})(helpers);