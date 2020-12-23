const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle ="#2c2c2c";

let painting = false;

function stopPainting() {
    painting = false;
    console.log(painting);
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
    console.log(painting);
}
function onMouseUp(event){
    stopPainting();
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}
