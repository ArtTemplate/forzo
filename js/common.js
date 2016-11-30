/*
 * Author: ArtStyles Brands (ArtTemplate / ArtIcons)
 * URL: http://themeforest.net/user/artstyles
 * Template Name: FORZO
 * Version: 1.0
*/

/*
 * Autoresize textarea

 *
*/

"use strict";

(function($) {

    // Preload all images.
    var bodyEl = document.body;
	
    imagesLoaded(bodyEl, { background: true }, function() {
		setTimeout(function () {
            bodyEl.classList.remove('loading');
        }, 800)
        //bodyEl.classList.remove('loading');
    });

	// Main sliders
    var $item = $('.main-slider.carousel .item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight); 
    $item.addClass('image-slider');

    $('.main-slider.carousel img').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
           'background-image' : 'url(' + $src + ')',
           'background-color' : $color
        });
        $(this).remove();
    });

    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    // Hamburger
	$('.menu-toggle').on('click', function() {
	    $('.menu, .menu-toggle').toggleClass('active');
    });

    // Autoresize textarea
    $("textarea").each(function(){
        autosize(this);
    });

})(jQuery);