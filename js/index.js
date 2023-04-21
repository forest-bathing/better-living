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



const hamburgerButton = document.querySelector('.hamburger-button');
const menuContent = document.querySelector('.menu-content');
const overlay = document.querySelector('.overlay');

hamburgerButton.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});