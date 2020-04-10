// $(document).ready(function(){
//   $(".click-on").click(function(){
//   	$(".menu-toggle").fadeToggle();
//   	$(".line-1, .line-2").css("background-color","#111")
//   	$(".line-1").css("transform","rotate(-45deg) translate(-3px, 2.5px)")
//   	$(".line-2").css("transform","rotate(45deg) translate(-6.5px, -6.5px)")
//     $("body").addClass("body1")
//   });
// });
$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});
// $(document).ready(function(){
//   $(".click-on").click(function(){
//     $(".all").css("transform","translate(-20%)");
//     $(".menu-toggle").css("transform","translate(0,0)");
//     // $(".all-bl").addClass(100);
//     // $(".menu-toggle").addClass("right-toggle");
//   	// $(".menu-toggle").toggleClass("fade-toggle");
//   	// $("body").toggleClass("body1");
//   	// $(".line-1-1").fadeOut(100);
//   	// $(".line-2-1").fadeOut(100);
//   	$(".background").fadeIn(100);
//   	// $(".menu-top").toggleClass("magic-1");
//   	// $("body").addClass("body1");
//   	// $("body").removeClass("body2");
//     //$("body").toggleClass("body1")
//   });
//   $(".click-on-1").click(function(){
//     $(".all").css("transform","translate(0)");
//     $(".menu-toggle").css("transform","translate(100%)");
//     // $(".all").toggleClass("all-1");
//     // $(".all-bl").toggleClass(100);
//     // $(".menu-toggle").toggleClass("right-toggle");
//     // $(".background").fadeOut(100);
//   	// $(".menu-toggle").toggleClass("fade-toggle");
//   	// $("body").toggleClass("body1");
//   	$(".background").fadeOut(100);
//   	// $("body").removeClass("body1");
//   	// $("body").addClass("body2");
//     //$("body").toggleClass("body1")
//   });
// });
$(document).ready(function(){
  $(".click-on, .click-on-1").click(function(){
    $(".all").toggleClass("all-1");
    $(".top").toggleClass("all-1");
    $(".all-bl").fadeToggle(100)
    $(".menu-toggle").toggleClass("right-toggle")
  });
});
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 160){
$('.menu-top').css("background-color","#dcdcdc");
$('.line-1-1, .line-2-1').css("background-color","#111");
$('.name').css("color","#EE8572");
} else{
$('.menu-top').css("background-color","initial");
$('.line-1-1, .line-2-1').css("background-color","#fff");
$('.name').css("color","#fff");
$(".slide-menu").slideToggle("slow");
}
});
$(window).on('load', function () {
    var $preloader = $('#loading'),
        $loader   = $preloader.find('.loader');
        $body = $("body"),
        $htext = $(".header-text"),
    // $body.removeClass("body1");
    // $("header").css("border","1px solid red");
    $loader.slideUp();
    $preloader.delay(1000).slideUp(1000);
});
  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();



