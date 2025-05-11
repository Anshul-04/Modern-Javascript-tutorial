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
    this.x = x ; // explosion ka center karega x(horizonally) position pe
    this.y = y ; // explosion ka center karega y position (vertically) pe    
    this.image = new Image();
    this.image.src = 'assets/boom.png';
    this.frame =0;
    this.timer =0; // or giving time to each explosion frame
    this.angle = Math.random() * 6.28; // random angle for rotation
  }

  update(){
    this.timer++;    
    if(this.timer % 10 === 0){
      // ye animation ko slow karne ke liye hai
      this.frame++;

    }
  }

  draw(){
    ctx.save(); // current state ko save karega
    ctx.translate(this.x , this.y); // canvas ko translate karega x aur y position pe
    ctx.rotate(this.angle); // canvas ko rotate karega angle ke according
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
      0 - this.width / 2,
      
      // destination y - canvas par kaha draw karna hai (y position)
      0 - this.height / 2,
      
      // destination width - canvas par kitni width mein draw karna hai
      this.width,
      
      // destination height - canvas par kitni height mein draw karna hai
      this.height    
    );

    ctx.restore(); // canvas ko original state mein wapas laega
  }
}

window.addEventListener('click', function(e){
  createAnimation(e);
});

window.addEventListener('mousemove', function(e){
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


