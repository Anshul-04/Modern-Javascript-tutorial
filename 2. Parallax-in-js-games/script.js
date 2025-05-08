/** 
 * Canvas element and its 2D rendering context.
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// let gameFrame = 0;

/** 
 * Canvas dimensions.
 */
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

/** 
 * Game speed for background scrolling.
 */
let gameSpeed = 5; // Speed of the background layers

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

window.addEventListener("load", function(){

  /**
  * Slider for adjusting game speed.
  */
  const slider = document.getElementById("slider");
  slider.value = gameSpeed;
  const showGameSpeed=  document.getElementById("showGameSpeed");
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener("input", function(e){
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = gameSpeed;
  })

  /**
  * Layer class for managing background layers.
  */
  class Layer{
    constructor(image,speedModifier){
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700 ;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }

    update(){
      this.speed = gameSpeed * this.speedModifier;
      if(this.x <= -this.width){
        this.x =0;
      }
      
      this.x = this.x - this.speed;
      // this.x = gameFrame * this.speed % this.width;

    }

    draw(){
      ctx.drawImage(this.image, this.x ,this.y , this.width, this.height);
      ctx.drawImage(this.image, this.x + this.width ,this.y , this.width, this.height);
    }
  }

  const layer1 = new Layer(backgroundLayer1, 0.2);
  const layer2 = new Layer(backgroundLayer2, 0.4);
  const layer3 = new Layer(backgroundLayer3, 0.6);
  const layer4 = new Layer(backgroundLayer4, 0.8);
  const layer5 = new Layer(backgroundLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];

  function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach( object =>{
      object.update();
      object.draw();
    });

    // gameFrame--;
    requestAnimationFrame(animate);
  }
  animate();
});


/**
 * Parallax Effect is when Foreground layers move 
 * faster than background layers.
 */


// x -= gameSpeed;
// x2 -= gameSpeed;
// if (x < -2400)  x =  x2 + 2400 ;       
// if (x2 < -2400)  x2 = x + 2400 ;