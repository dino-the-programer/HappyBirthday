/**@type {HTMLcanvasBackElement} */


const divGrd = [[0, 0], [0, 0]];

for (let i = 0; i <= 1; i++){
    for (let j = 0; j <= 1; j++){
        divGrd[i][j] = document.getElementById("wrapper-top-col" + String(i + 1) + "-row-" + String(j + 1));
        divGrd[i][j].style.rotate = String((Math.random() * 20) * (Math.random() < 0.5 ? -1 : 1)) + "deg";
    }
}

fetch("./static/json/enc.json")
    .then((response) => response.json())
    .then((json) => setImg(json));

function setImg(imgdict) {
    divGrd[0][0].style.backgroundImage = "url(" + decrypt(imgdict.img1,Clientname) + ")";
    divGrd[0][1].style.backgroundImage = "url(" + decrypt(imgdict.img2,Clientname) + ")";
    divGrd[1][0].style.backgroundImage = "url(" + decrypt(imgdict.img3,Clientname) + ")";
    divGrd[1][1].style.backgroundImage = "url(" + decrypt(imgdict.img4,Clientname) + ")";
}

const canvasProp = document.getElementById("prop-canvas");
canvasProp.width = window.innerWidth/2;
canvasProp.height = window.innerHeight/2;
const ctxProp = canvasProp.getContext("2d");

const grd = ctxProp.createLinearGradient(0, 0, 0, canvasProp.height - 20);
grd.addColorStop(0, "#00000000");
grd.addColorStop(1, "#000000");

function makeGradient() {
    ctxProp.fillStyle = grd;
    ctxProp.fillRect(0, 0, canvasProp.width, canvasProp.height);
}

makeGradient();

let Tabletop = canvasProp.height * 0.7;
ctxProp.fillStyle = "#1f0c11";
ctxProp.fillRect(0, Tabletop, canvasProp.width, 25);


let cake = new Image();
cake.onload = function () {
    ctxProp.drawImage(cake, canvasProp.width / 2 - 40, Tabletop - 120, 80, 120);
}

cake.src = "/static/images/cake.png";
console.log(cake);

let audio = new Audio("static/audio/audio.mp3");

window.addEventListener("click", () => {
    audio.play();
});







