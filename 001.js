// const slides = document.querySelectorAll(".slide");
// const slider = document.querySelector(".slider");

// let currentSlide = 0;
// slides[currentSlide].classList.add("active");

// function nextSlide() {
//   slides[currentSlide].classList.remove("active");
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add("active");
// }

// setInterval(nextSlide, 5000); *輪播

// let countdown = 1.02; // 倒數計時的初始值
// let countdownInterval = setInterval(function() {
//   countdown = countdown - 0.01; // 每個時間間隔減少 0.01
//   let countdownDisplay = countdown.toFixed(2); // 將倒數計時格式化為兩位小數的字符串
//   document.getElementById("countdown").textContent = countdownDisplay; // 將格式化後的倒數計時顯示在頁面上
//   if (countdown <= 0) {
//     clearInterval(countdownInterval); // 如果倒數計時已經到達 0，就停止計時器
//     document.getElementById("countdown").textContent = "Time's up!"; // 在頁面上顯示 "Time's up!"
//   }
// }, 10); // 每 10 毫秒執行一次 *倒數

// let isDragging = false;
// let box = document.getElementById("box");

// box.addEventListener("mousedown", function(e) {
//   isDragging = true;
//   box.style.cursor = "grabbing";
// });

// document.addEventListener("mousemove", function(e) {
//   if (isDragging) {
//     box.style.left = e.clientX - box.offsetWidth / 2 + "px";
//     box.style.top = e.clientY - box.offsetHeight / 2 + "px";
//   }
// });

// document.addEventListener("mouseup", function(e) {
//   isDragging = false;
//   box.style.cursor = "grab";
// });*拖曳

