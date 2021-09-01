$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".header").addClass("active_scroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active_scroll");
        }
    });
});
