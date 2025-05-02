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


// image about slider

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".about-slides");
  const slides = document.querySelectorAll(".about-slides img");
  const totalSlides = slides.length;

  let currentIndex = 0;

  // Clone first & last slides for the seamless effect
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".about-slides img");
  const totalSlidesWithClones = allSlides.length;

  // Set initial position (fake the first clone)
  slidesContainer.style.transform = `translateX(-100%)`;

  function moveSlide(direction) {
      currentIndex += direction;

      slidesContainer.style.transition = "transform 0.5s ease-in-out";
      slidesContainer.style.transform = `translateX(${-100 * (currentIndex + 1)}%)`;

      // After transition, reset position instantly for seamless effect
      slidesContainer.addEventListener("transitionend", () => {
          if (currentIndex === totalSlides) {
              slidesContainer.style.transition = "none";
              currentIndex = 0;
              slidesContainer.style.transform = `translateX(-100%)`;
          }

          if (currentIndex === -1) {
              slidesContainer.style.transition = "none";
              currentIndex = totalSlides - 1;
              slidesContainer.style.transform = `translateX(${-100 * totalSlides}%`;
          }
      });
  }

  // Button event listeners
  document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
  document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});






  document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth <= 768; // adjust based on your mobile breakpoint
    const currentPath = window.location.pathname.split("/").pop(); // get filename
    const serviceLink = document.querySelector('.a-disable');

    if (isMobile && currentPath === "services.html") {
      // Disable button inside <a>
      serviceLink.disabled = true;
      serviceLink.style.pointerEvents = "none";
      serviceLink.style.cursor = "default";

      // Optional: prevent default on <a> click too
      serviceLink.closest("a").addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  });

