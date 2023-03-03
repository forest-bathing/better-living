'use strict';
const canvas = document.getElementById('draw');

function drawCircle() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#1cea83';
        ctx.fillStyle = '#94e5f7';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(200, 200, 40, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

function drawTriángulo() {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        /*ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(100, 100);
        ctx.lineTo(50, 100);
        ctx.beginPath();
        ctx.fillStyle = '#1cea83';
        ctx.fill();*/

        ctx.beginPath();
        ctx.moveTo(100, 50)
        ctx.lineTo(200, 100)
        ctx.lineTo(50, 100)
        //在用lineTo()把線連回原點的位置，圍成三角形
        ctx.lineTo(50, 50)
        /*而除了在連回原點外，也可以使用closePath()
        他會把最後一個點及起點座標相連，上下兩行擇一就行了！*/
        ctx.closePath()
        ctx.stroke()
    }
}

function drawStrokeRect() {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#1cea83';
        ctx.strokeRect(200, 50, 50, 50);
    }
}

function clearAll() {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 390, 800);
    }
}
