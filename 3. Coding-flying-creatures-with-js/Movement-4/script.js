/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 25; //number of enemies to be created
const enemiesArrays = [];
let gameFrame = 0;



class Enemy{
  constructor(){
    this.image = new Image();
    this.image.src = "assets/enemy4.png";      
    this.speed = Math.random() * 4 + 1; //range between 1 and 5
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2 ;
    this.height = this.spriteHeight / 2 ;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    this.frame = 0 ;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1 ); //random number between 1 and 3
    this.interval = Math.floor(Math.random() * 200 + 50); //random number between 50 and 250
  }

 

  update(){

    if(gameFrame % this.interval === 0 ){
      this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 50 ; //move towards new x position
    this.y -= dy / 50; //move towards new y position

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