let countdown = 1.02; // 倒數計時的初始值
let countdownInterval = setInterval(function() {
  countdown = countdown - 0.01; // 每個時間間隔減少 0.01
  let countdownDisplay = countdown.toFixed(2); // 將倒數計時格式化為兩位小數的字符串
  document.getElementById("countdown").textContent = countdownDisplay; // 將格式化後的倒數計時顯示在頁面上
  if (countdown <= 0) {
    location.href = "https://forest-bathing.github.io/better-living/activity_ear.html";  }
}, 50); 
