'use strict';

$(document).ready(function(){

    bckgrndShow();
    
});

$(window).scroll (function () {
    
    bckgrndShow();
    
});
        
var navHeight = $('.navbar').height();
var currentPosition = $(window).scrollTop();

function bckgrndShow (){
    if ( $(window).scrollTop() > navHeight) {
        $('.navbar').addClass('navbar_temp');
    } else {
        $('.navbar').removeClass('navbar_temp');
    }
};

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - navHeight
    }, 500);
});