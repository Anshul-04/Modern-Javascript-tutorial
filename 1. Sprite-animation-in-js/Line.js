const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

function drawLine(){
  ctx.fillStyle='red';
  ctx.moveTo(50,50); //start-point in position
  ctx.lineTo(200,200); //end-point in position
  ctx.stroke(); //stroke() method to actually draw the line:
}
drawLine();
