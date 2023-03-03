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
        ctx.stroke();
    }
}

function drawTriángulo() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#ffffff'; 
        ctx.moveTo(100, 50)
        ctx.lineTo(150, 100)
        ctx.lineTo(50, 100)
        //在用lineTo()把線連回原點的位置，圍成三角形
        ctx.lineTo(100, 50)
        /*而除了在連回原點外，也可以使用closePath()
        他會把最後一個點及起點座標相連，上下兩行擇一就行了！*/
        ctx.closePath()
        ctx.fill();
        ctx.stroke()
    }
}

function drawStrokeRect() {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#ffffff'; 
        ctx.strokeRect(74, 514, 44, 44);
        ctx.closePath()
        ctx.fill();
        ctx.stroke()
    }
}

function clearAll() {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 390, 800);
    }
}
