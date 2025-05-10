/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
let explosions = [];

class Explosion{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2 ;    
    this.image = new Image();
    this.image.src = 'assets/boom.png';
    this.frame =0;
  }

  update(){
    frame++;
  }

  draw(){
    ctx.drawImage(
      // sprite ka source image
      this.image,
        
        // source x position - sprite sheet mein se current frame ki starting x position
        this.frame * this.spriteWidth,
        
        // source y position - sprite sheet mein se y position (0 kyunki ek line mein hai frames)
        0,
        
        // source width - ek frame ki original width sprite sheet mein
        this.spriteWidth,
        
        // source height - ek frame ki original height sprite sheet mein
        this.spriteHeight,
        
        // destination x - canvas par kaha draw karna hai (x position)
        this.x,
        
        // destination y - canvas par kaha draw karna hai (y position)
        this.y,
        
        // destination width - canvas par kitni width mein draw karna hai
        this.width,
        
        // destination height - canvas par kitni height mein draw karna hai
        this.height    
    );
  }
}

window.addEventListener('click', function(e){
  ctx.fillStyle = 'red';
  ctx.fillRect(e.x , e.y , 50 , 50 );
});



