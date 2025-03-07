(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);



//  testimonial slider

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".testimonial-slide");
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
      });
  }

  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
  }, 5000); // Change slide every 5 seconds

  showSlide(currentIndex); // Show the first slide on load
});


// document.addEventListener("DOMContentLoaded", function () {
//   let currentIndex = 0;
//   const slides = document.querySelectorAll(".testimonial-slide");
//   const totalSlides = slides.length;

//   function showSlide(index) {
//       slides.forEach((slide, i) => {
//           slide.classList.toggle("active", i === index);
//       });
//   }

//   document.querySelector(".next-btn").addEventListener("click", function () {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       showSlide(currentIndex);
//   });

//   document.querySelector(".prev-btn").addEventListener("click", function () {
//       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//       showSlide(currentIndex);
//   });

//   // Auto-slide every 5 seconds
//   setInterval(() => {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       showSlide(currentIndex);
//   }, 5000);

//   showSlide(currentIndex); // Show the first slide on load
// });
