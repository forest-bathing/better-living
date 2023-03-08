'use strict';
const canvas = document.getElementById('draw');

function drawCircle() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(277, 667, 22, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        
    }
}

function drawTriángulo() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#ffffff';
        ctx.moveTo(268, 140)
        ctx.lineTo(290, 180)
        ctx.lineTo(246, 180)
        //在用lineTo()把線連回原點的位置，圍成三角形
        ctx.lineTo(268, 140)
        /*而除了在連回原點外，也可以使用closePath()
        他會把最後一個點及起點座標相連，上下兩行擇一就行了！*/
        ctx.closePath()
        ctx.fill();
       
    }
}

function drawStrokeRect() {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")
        ctx.beginPath();
        //沿用寬度及色彩設定
        ctx.lineWidth = 30;
        ctx.strokeStyle = "#ffffff";
        ctx.fillStyle = "#ffffff";
        /*使用rect(x,y,w,h)繪製四角形
        x,y一樣是座標，w和h是四邊形的寬和高*/
        ctx.strokeRect(95, 530, 10,10);
        ctx.fill();
       
    }
}


function clearAll() {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 390, 800);
    }
}