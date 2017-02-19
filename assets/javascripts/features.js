(function(){

    'use strict';

    console.log('features.js');

    var $featuresList = $('.features-list'),
        initialSlide = Math.floor($('.feature-item').size() / 2);

    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        $featuresList.slick('slickGoTo', $('.nav-link').index(this));
    });

    $featuresList.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.nav-link').removeClass('selected');
        $('.nav-link').eq(nextSlide).addClass('selected');
    });

    $featuresList.slick({
        mobileFirst: true,
        arrows: false,
        infinite: false,
        dots: false,
        slide: '.feature-item',
        initialSlide: initialSlide
    });

    $('.nav-link').eq(initialSlide).addClass('selected');


})();