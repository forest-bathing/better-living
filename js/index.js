let fadeSlideIndex = 0;
const fadeSlides = document.querySelectorAll(".fade-slider .slides .box0");


function fadeSlide() {
  if (fadeSlideIndex >= fadeSlides.length) {
    fadeSlideIndex = 0;
  }
  fadeSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  fadeSlides[fadeSlideIndex].classList.add("active");
  fadeSlideIndex++;
}


setInterval(fadeSlide, 3000);

