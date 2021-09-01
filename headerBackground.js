//* $(function() {
//    $(window).on("scroll", function() {
//        if($(window).scrollTop() > 100) {
//            $(".header").addClass("active_scroll");
//        } else {
//            //remove the background property so it comes transparent again (defined in your css)
//           $(".header").removeClass("active_scroll");
//        }
//   });
//}); 

var pos = $(window).scrollTop();

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if(scroll > pos) {
        console.log('scrollDown');
        $(".header").addClass("scroll_down");
    } 
    if(scroll < pos) {
         console.log('scrollUp');
         $(".header").removeClass("scroll_down");
         $(".header").addClass("scroll_up");
    }
    if(scroll == 0) {
        $(".header").removeClass("scroll_up");
   }
    pos = scroll;
});
