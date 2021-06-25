'use strict';

$(document).ready(function(){

    $('.big-banner-img').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: '5000'
    });

    $('.service-banner').slick({
        dots: true,
    });


})