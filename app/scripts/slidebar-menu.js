/*
* Uses jQuery!!!!111one
*/


/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  
    // Toggle Nav on Click
    $('.slidebar-toggle').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
    $(document).click(function(e) {
      e.preventDefault();
      $('.slidebar-menu').removeClass('slidebar-menu-show');
    });

    $('.slidebar-menu, .slidebar-toggle').click(function(e) {
      e.stopPropagation();
    });

  
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('.slidebar-menu').hasClass('slidebar-menu-show')) {
        // Do things on Nav Close
        $('.slidebar-menu').removeClass('slidebar-menu-show');
    } else {
        // Do things on Nav Open
        $('.slidebar-menu').addClass('slidebar-menu-show');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}