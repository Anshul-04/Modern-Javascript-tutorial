/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 50;
const enemiesArrays = [];
let gameFrame = 0;



class Enemy{
  constructor(){
    this.image = new Image();
    this.image.src = "assets/enemy2.png";      
    this.speed = Math.random() * 5 + 1; //range between 1 and 5
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5 ;
    this.height = this.spriteHeight / 2.5 ;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0 ;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1 ); //random number between 1 and 3
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2 ; //random number between 0.1 and 0.3
    this.curve = Math.random() * 6; //random number between 0 and 5
  }

  update(){
    this.x -= this.speed; //move left
    this.y += this.curve * Math.sin(this.angle); //move up and down
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