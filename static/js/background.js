/**@type {HTMLcanvasBackElement} */

const canvasBack = document.getElementById("background-canvas");
canvasBack.width = window.innerWidth;
canvasBack.height = window.innerHeight;
const ctxBack = canvasBack.getContext("2d");

function drawBallon(x, y, scale,color) {
    ctxBack.save();
    ctxBack.translate(x, y);
    ctxBack.scale(scale, scale);
    ctxBack.rotate(Math.PI);
    ctxBack.beginPath();
    ctxBack.arc(0, 0, 30, 0, Math.PI);
    ctxBack.moveTo(-30, 0);
    ctxBack.bezierCurveTo(-15, -50, 15, -50, 30, 0);
    ctxBack.fillStyle = color;
    ctxBack.fill();
    ctxBack.moveTo(0,0)
    ctxBack.lineTo(5,-43);
    ctxBack.lineTo(-5,-43);
    ctxBack.lineTo(0,0);
    ctxBack.fill();
    ctxBack.restore();
}



function drawRope(eleArr) {
    ctxBack.save();
    ctxBack.strokeStyle = "black";
    ctxBack.lineWidth = canvasBack.width*0.01; 
    for (let i = 0; i < eleArr.length; i++){
        for (let j = 0; j < eleArr[i].length; j++){
            let x = eleArr[i][j].getBoundingClientRect().left + eleArr[i][j].getBoundingClientRect().width / 2;
            let y = eleArr[i][j].getBoundingClientRect().top + eleArr[i][j].getBoundingClientRect().height / 2;
            ctxBack.moveTo(x, y);
            ctxBack.lineTo(x, 0);
            ctxBack.stroke();
        }
    }
    ctxBack.restore();
}

let ballonArr = [];
for (let i = 0; i < 20; i++){
    let x = Math.random() * canvasBack.width;
    let y = Math.random() * canvasBack.height;
    let scale = Math.max(0.9, Math.random() + 0.4);
    let color = "rgb(" + String(Math.random() * 255) + "," + String(Math.random() * 255) + "," + String(Math.random() * 255) + ")";
    let speed = Math.max(0.9, Math.random() + 0.5);
    ballonArr.push([x, y, scale, color, speed]);
}


function draw() {
    ctxBack.clearRect(0, 0, canvasBack.width, canvasBack.height);
    ballonArr.forEach(e => {
        drawBallon(e[0], e[1], e[2], e[3]);
        e[1] -= e[4];
        if (e[1] <= -50) {
            e[1] = canvasBack.height + 50;
            e[3] = "rgb(" + String(Math.random() * 255) + "," + String(Math.random() * 255) + "," + String(Math.random() * 255) + ")";
        }
    });
    drawRope(divGrd);
    requestAnimationFrame(draw);
}

draw();

