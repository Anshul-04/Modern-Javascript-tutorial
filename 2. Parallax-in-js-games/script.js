/** 
 * Canvas element and its 2D rendering context.
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/** 
 * Canvas dimensions.
 */
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

/** 
 * Game speed for background scrolling.
 */
let gameSpeed = 15;

/**
 * Background layer images.
 */
const backgroundLayer1 = new Image();
backgroundLayer1.src = "assets/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "assets/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "assets/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "assets/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "assets/layer-5.png";

let x = 0; // First layer position
let x2 = 2400; // Second layer x position for parallax scrolling

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer4, x, 0);
  ctx.drawImage(backgroundLayer4, x2, 0);

  if(x < -2400) x = 2400 + x2- gameSpeed; 
  else x -= gameSpeed;
  if(x2 < -2400) x2 = 2400 + x - gameSpeed; 
  else x2 -= gameSpeed ; // Slower speed for the second layer
  
  requestAnimationFrame(animate);
}
animate();

/**
 * Parallax Effect is when Foreground layers move 
 * faster than background layers.
 */


// x -= gameSpeed;
// x2 -= gameSpeed;
// if (x < -2400)  x =  x2 + 2400 ;       
// if (x2 < -2400)  x2 = x + 2400 ;