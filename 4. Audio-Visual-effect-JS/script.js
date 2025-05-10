/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
let explosions = [];
let canvaPosition = canvas.getBoundingClientRect(); // canvas ka position


class Explosion{
  constructor(x,y){
   
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2 ;  
    this.x = x - this.width / 2; // explosion ka center karega x(horizonally) position pe
    this.y = y - this.height / 2; // explosion ka center karega y position (vertically) pe    
    this.image = new Image();
    this.image.src = 'assets/boom.png';
    this.frame =0;
    this.timer =0; // or giving time to each explosion frame
  }

  update(){
    this.timer++;
    if(this.timer % 10 === 0){
      // ye animation ko slow karne ke liye hai
      this.frame++;

    }
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
  createAnimation(e);
});

function createAnimation(e){
  let positionX = e.x - canvaPosition.left;   //
  let positionY = e.y - canvaPosition.top;
  explosions.push(new Explosion(positionX,positionY));
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i < explosions.length ;i++){   
    explosions[i].update();
    explosions[i].draw();

    if(explosions[i].frame > 5){
      // agar frame 5 se zyada ho gaya toh us explosion ko hata do
      // ye explosion ko array se remove karega
      explosions.splice(i,1);
      i--;
    }
  }
  requestAnimationFrame(animate);

}
animate();


