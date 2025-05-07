const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

function drawCircle(){
  ctx.beginPath();   //beginPath() method to start a new path
  ctx.arc(400,400,50,0,2*Math.PI); //arc() method to create a circle
  ctx.fillStyle='blue'; //fillStyle property to set the color
  ctx.stroke(); //stroke() method to actually draw the circle
  requestAnimationFrame(drawCircle);
}
drawCircle();