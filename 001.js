//*輪播
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

let currentSlide = 0;
slides[currentSlide].classList.add("active");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 5000); 


//*倒數
// let countdown = 1.02; // 倒數計時的初始值
// let countdownInterval = setInterval(function() {
//   countdown = countdown - 0.01; // 每個時間間隔減少 0.01
//   let countdownDisplay = countdown.toFixed(2); // 將倒數計時格式化為兩位小數的字符串
//   document.getElementById("countdown").textContent = countdownDisplay; // 將格式化後的倒數計時顯示在頁面上
//   if (countdown <= 0) {
//     clearInterval(countdownInterval); // 如果倒數計時已經到達 0，就停止計時器
//     document.getElementById("countdown").textContent = "0.00"; // 在頁面上顯示 "Time's up!"
//   }
// }, 50); // 每 10 毫秒執行一次 


//*拖曳
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
// });


// //拖曳圓(圓會動)
// // 取得HTML元素
// const circle = document.getElementById("circle");
// const number = document.getElementById("number");

// // 設定圓形中心點的初始位置及數字初始值
// let centerX = window.innerWidth / 2;
// let centerY = window.innerHeight / 2;
// let num = 0;

// // 設定圓形拖曳事件
// circle.addEventListener("mousedown", startDrag);

// // 開始拖曳時的函式
// function startDrag(event) {
//   document.addEventListener("mousemove", drag);
//   document.addEventListener("mouseup", stopDrag);
// }

// // 拖曳中的函式
// function drag(event) {
//   // 計算拖曳距離
//   const distance = Math.sqrt(Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2));
  
//   // 更新圓形中心點位置
//   circle.style.top = `${event.clientY - distance}px`;
//   circle.style.left = `${event.clientX - distance}px`;
  
//   // 計算數字
//   num = Math.round(distance / 10);
  
//   // 更新顯示的數字
//   number.innerText = num;
// }

// // 結束拖曳時的函式
// function stopDrag(event) {
//   document.removeEventListener("mousemove", drag);
//   document.removeEventListener("mouseup", stopDrag);
  
//   // 重置圓形中心點位置
//   circle.style.top = "50%";
//   circle.style.left = "50%";
  
//   // 重置數字
//   num = 0;
//   number.innerText = num;
// }


// //*圓向外拉數字變大
// // 取得canvas元素
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// // 定義圓形的屬性
// var centerX = canvas.width/2;
// var centerY = canvas.height/2;
// var radius = 50;
// var fontSize = 24;
// var maxRadius = 150;
// var minRadius = 50;

// // 定義圓形的初始值
// var count = 0;
// var text = "Count: " + count.toFixed(2);

// // 繪製圓形和中央數字
// function draw() {
//   // 清除canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // 繪製圓形
//   ctx.beginPath();
//   ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//   ctx.fillStyle = "#FFA07A";
//   ctx.fill();

//   // 繪製中央數字
//   ctx.font = fontSize + "px Arial";
//   ctx.fillStyle = "white";
//   ctx.textAlign = "center";
//   ctx.fillText(text, centerX, centerY + fontSize/3);
// }

// // 拖曳事件
// var dragging = false;
// var dragStartX, dragStartY;

// canvas.addEventListener("mousedown", function(event) {
//   dragging = true;
//   dragStartX = event.clientX;
//   dragStartY = event.clientY;
// });

// canvas.addEventListener("mousemove", function(event) {
//   if (dragging) {
//     var deltaX = event.clientX - dragStartX;
//     var deltaY = event.clientY - dragStartY;
//     var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

//     // 確保拖曳的距離不超過半徑的最大值
//     if (distance > maxRadius - radius) {
//       distance = maxRadius - radius;
//     }

//     // 計算數字
//     count = distance / (maxRadius - minRadius) * 100;
//     text = "Count: " + count.toFixed(2);

//     // 設定新的半徑
//     radius = minRadius + distance;

//     draw();
//   }
// });

// canvas.addEventListener("mouseup", function(event) {
//   dragging = false;
// });

// // 初始繪製
// draw();
