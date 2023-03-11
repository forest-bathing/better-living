
//*圓向外拉數字變大
// 取得canvas元素
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// 定義圓形的屬性
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var radius = 50;
var fontSize = 24;
var maxRadius = 150;
var minRadius = 50;

// 定義圓形的初始值
var count = 0;
var text = "Count: " + count.toFixed(2);

// 繪製圓形和中央數字
function draw() {
  // 清除canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 繪製圓形
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#FFA07A";
  ctx.fill();

  // 繪製中央數字
  ctx.font = fontSize + "px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(text, centerX, centerY + fontSize/3);
}

// 拖曳事件
var dragging = false;
var dragStartX, dragStartY;

canvas.addEventListener("mousedown", function(event) {
  dragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
});

canvas.addEventListener("mousemove", function(event) {
  if (dragging) {
    var deltaX = event.clientX - dragStartX;
    var deltaY = event.clientY - dragStartY;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // 確保拖曳的距離不超過半徑的最大值
    if (distance > maxRadius - radius) {
      distance = maxRadius - radius;
    }

    // 計算數字
    count = distance / (maxRadius - minRadius) * 100;
    text = "Count: " + count.toFixed(2);

    // 設定新的半徑
    radius = minRadius + distance;

    draw();
  }
});

canvas.addEventListener("mouseup", function(event) {
  dragging = false;
});

// 初始繪製
draw();
