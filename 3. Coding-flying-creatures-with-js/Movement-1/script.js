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
    this.image.src = "assets/enemy1.png";      
    // this.speed = Math.random() * 4 - 2; //range between -2 and 2
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5 ;
    this.height = this.spriteHeight / 2.5 ;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0 ;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1 ); //random number between 1 and 3
    
  }

  update(){
    this.x+= Math.random() * 8 - 4; //range between -2 and 2
    this.y+= Math.random() * 8 - 4; //range between -2 and 2
    
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