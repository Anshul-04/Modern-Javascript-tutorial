/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 50; //number of enemies to be created
const enemiesArrays = [];
let gameFrame = 0;



class Enemy{
  constructor(){
    this.image = new Image();
    this.image.src = "assets/enemy3.png";      
    this.speed = Math.random() * 4 + 1; //range between 1 and 5
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2 ;
    this.height = this.spriteHeight / 2 ;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0 ;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1 ); //random number between 1 and 3
    this.angle = 0;
    this.angleSpeed = Math.random() * 1.2 + 0.5 ; //random number between 0.1 and 0.3
    // this.curve = Math.random() * 200 + 50; //random number between 0 and 5
  }

 
  /**
   * Updates the position and animation frame of the object.
   * 
   * - Calculates the new `x` and `y` coordinates based on trigonometric functions
   *   to create a circular or oscillating movement pattern.
   * - Adjusts the `angle` property to incrementally change the position over time.
   * - Resets the `x` position to the right side of the canvas if the object moves
   *   completely off the left side, enabling endless movement.
   * - Animates the sprite by cycling through frames based on the `flapSpeed` property
   *   and the current game frame.
   */
  update(){

    this.x = canvas.width/2 * Math.sin(this.angle * Math.PI / 90) + (canvas.width/2 - this.width/2); 
    this.y = canvas.height/2 * Math.cos(this.angle * Math.PI / 360) + (canvas.height/2 - this.height/2); 
    this.angle += this.angleSpeed; 

    if(this.x + this.width < 0) {
      this.x = canvas.width; //reset position to right side of canvas for endless movement
    }
    //animate sprites
    if(gameFrame % this.flapSpeed === 0){
      this.frame > 4 ? this.frame = 0 : this.frame++ ;
    }

  }

  draw(){
    ctx.drawImage(this.image, this.frame * this.spriteWidth , 0,
      this.spriteWidth, this.spriteHeight , 
      this.x , this.y , this.width , this.height,);
  }
}

for(let i=0; i<numberOfEnemies; i++){
  enemiesArrays.push(new Enemy());  
} 

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArrays.forEach( enemy =>{
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();