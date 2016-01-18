/*jslint browser: true*/
/*global $, jQuery, alert*/

// jQuery to shrink the navbar on scroll
$(window).scroll(function () {
    "use strict";
    if ($('#pj-navbar').offset().top > 50) {
        $('#pj-navbar').addClass('pj-navbar-shrink');
    } else {
        $('#pj-navbar').removeClass('pj-navbar-shrink');
    }
});


// jQuery for page scrolling and menu hide feature
$(function () {
    "use strict";
    $('a.pj-page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 400);

        // Closes the Responsive Menu on Menu Item or Brand Click
        $('.navbar-collapse').collapse('hide');
        event.preventDefault();
    });
});