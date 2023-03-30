const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

let currentSlide = 0;
slides[currentSlide].classList.add("active");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 4000);
