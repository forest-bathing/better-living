
//*圓向外拉數字變大
// 取得canvas元素
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// 定義圓形的屬性
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 50;
var fontSize = 24;
var maxRadius = 390; 0
var minRadius = 80;

// 定義圓形的初始值
var count = 0;
var text = count.toFixed(0);

// 繪製圓形和中央數字
function draw() {
  // 清除canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 繪製圓形
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  // 繪製中央數字
  ctx.font ="40px Arial";
  ctx.fillStyle = "#5B8168";
  ctx.textAlign = "center";
  ctx.fillText(text, centerX, centerY + fontSize / 2);
}

// 拖曳事件
var dragging = false;
var dragStartX, dragStartY;

canvas.addEventListener("mousedown", function (event) {
  dragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
});

canvas.addEventListener("mousemove", function (event) {
  if (dragging) {
    var deltaX = event.clientX - dragStartX;
    var deltaY = event.clientY - dragStartY;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // 確保拖曳的距離不超過半徑的最大值
    if (distance > maxRadius - radius) {
      distance = maxRadius - radius;
    }

    // 計算數字
    count = distance / (maxRadius - minRadius) * 200;
    text = count.toFixed(0);

    // 設定新的半徑
    radius = minRadius + distance;

    draw();
  }
});

canvas.addEventListener("mouseup", function (event) {
  dragging = false;
});

// 初始繪製
draw();
