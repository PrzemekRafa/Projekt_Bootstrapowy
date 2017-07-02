'use strict';

$(document).ready(function(){

    bckgrndShow();
    scrollAnimate ();
    
});

$(window).scroll (function () {
    
    bckgrndShow();
    
});
$(window).resize(function (){
    scrollAnimate ();
});

function bckgrndShow (){
    var navHeight = $('.navbar').height();
    if ( $(window).scrollTop() > navHeight) {
        $('.navbar').addClass('navbar_temp');
    } else {
        $('.navbar').removeClass('navbar_temp');
    } 
};

function scrollAnimate () {
//var normalNavHeight = $('.navbar').height();
//var burgerNavHeight = $('#bs-example-navbar-collapse-1').height();
$(document).on('click', 'a', function(event){
    event.preventDefault();
    if($(window).width() <= 768) {
        var burgerNavHeight = $('#bs-example-navbar-collapse-1').height();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - burgerNavHeight
        }, 500);
    } else {
        var normalNavHeight = $('.navbar').height();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - normalNavHeight
        }, 500);
    }
//    console.log($(window).width());
//    console.log(navHeight);
//    console.log(burgerNavHeight);
});
}