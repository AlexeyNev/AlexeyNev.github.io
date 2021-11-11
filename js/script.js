$(document).ready(function(){
    $('.carousel').slick({
      speed: 1200,
      dots: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
      

// menu.onclick = function muFunction() {
//   let x = document.getElementById("myNav");

//   if (x.className === "nav") {
//     x.className += " responsive";
//   }
//   else {
//     x.className = "nav";
//   }
// }

$(".nav").on("click", function(){
  $(".nav a").slideToggle()
})


