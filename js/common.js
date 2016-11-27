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
	
    // Autoresize textarea
    $("textarea").each(function(){
        autosize(this);
    });

})(jQuery);