
        //  ScrollToTop
jQuery(document).ready(function() {  
    var offset = 1000;
    var duration = 300;
 
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#toTopBtn').fadeIn(duration);
        } else {
            jQuery('#toTopBtn').fadeOut(duration);
        }
    });
 
    jQuery('#toTopBtn').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

        // AoS animate
$(document).load( AOS.init({
    easing: 'ease-in-out-sine',
    duration: 500,
    disable: 'phone',
    /*{disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;}*/
}));