
// //Vanilla JS used to show/hide mobile navigation
// document.getElementById("nav-toggle").addEventListener("click", function(){
//   if(document.getElementsByClassName("mobile-list")[0].id === ""){
//     document.getElementsByClassName("mobile-list")[0].id = "show";
//   } else {
//     document.getElementsByClassName("mobile-list")[0].id = "";
//   }
// });

$(document).ready(function() {

  // // Toggle mobile menu views
  $("#nav-toggle").on("click", function(event) {
    // to prevent scrolling when we close the menu
    event.preventDefault();
    $(this).toggleClass("active");
    $(".mobile-list").slideToggle();
  });


  //navigate to page anchors
  $(".mobile-list a").on("click", function(event) {
    // Calculate header height to ensure that our header doesn't cover our anchor
    event.preventDefault();
    var headerHeight = $("header").height();
    var id = $(this).attr("href");
    var originalScrollCordinate = $(id).offset().top;
    var newScrollCordinate = originalScrollCordinate - headerHeight;
    $("body, html").animate({
      scrollTop: newScrollCordinate
    });

    // $("body, html").scrollTop(newScrollCordinate);
  });

  $("#nav-toggle").on("click", function(){

  })

  // set up carousel
  var $galleryImg = $(".gallery img");
  var $closeBtn = $(".btn");
  var $carousel = $(".carousel");
  var $overlay = $(".overlay");

  $carousel.slick({
    centerMode: true,
    fade: true,
    arrows: false,
    dots: true,
    draggable: false
  });

  $galleryImg.on("click", function(slick){
    var $imgId = $(this).attr("id");
    // Kick off fade-in, specifically to set display: block
    $overlay.fadeIn();
    // Goto clicked image slide and ensure we trigger dimension calculation
    $carousel.slick("slickGoTo", $imgId, true).slick("setPosition");
  });

  $closeBtn.on("click", function(event){
    event.preventDefault();
    $overlay.fadeOut();
  });

});







































// set up carousel
var $galleryImg = $(".gallery img");
var $closeBtn = $(".btn");
var $carousel = $(".carousel");
var $overlay = $(".overlay");

$carousel.slick({
  centerMode: true,
  fade: true,
  arrows: false,
  dots: true,
  draggable: false
});

$galleryImg.on("click", function(slick){
  var $imgId = $(this).attr("id");
  // Kick off fade-in, specifically to set display: block
  $overlay.fadeIn();
  // Goto clicked image slide and ensure we trigger dimension calculation
  $carousel.slick("slickGoTo", $imgId, true).slick("setPosition");
});

$closeBtn.on("click", function(event){
  event.preventDefault();
  $overlay.fadeOut();
});
