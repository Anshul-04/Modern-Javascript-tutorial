/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 50;
const enemiesArrays = [];

// enemy1 ={
//   x: 10,
//   y: 20,
//   width: 100,
//   height: 100
// }

class Enemy{
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2; //range between -2 and 2
  }

  update(){
    this.x+= this.speed;
    this.y+= this.speed;
  }

  draw(){
    ctx.fillRect(this.x ,this.y , this.width , this.height);
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
  })
  requestAnimationFrame(animate);
}
animate();