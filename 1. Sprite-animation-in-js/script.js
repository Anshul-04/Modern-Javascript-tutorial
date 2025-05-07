let playerState = "ko"; //playerState is used to control the animation state
const dropDown = document.getElementById("animations");
dropDown.addEventListener("change",function(e){
  playerState = e.target.value; //e.target.value is used to get the value of the selected option
})
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
const spriteWidth = 6876/12; //total image width/numOfColumns
const spriteHeight = 5230/10; //total image height/numOfRows

let gameFrame = 0; //gameFrame is used to control the speed of the animation
const staggerFrames = 5; //staggerFrames is used to control the speed of the animation
const spriteAnimations = [];
const animationStates = [
  {
    name : "idle",
    frames: 7
  },
  {
    name : "jump",
    frames: 7
  },
  {
    name : "fall",
    frames: 7
  },
  {
    name : "run",
    frames: 9
  },
  {
    name : "dizzy",
    frames: 11
  },
  {
    name : "sit",
    frames: 5
  },
  {
    name : "roll",
    frames: 7
  },
  {
    name : "bite",
    frames: 7
  },
  {
    name : "ko",
    frames: 12
  },
  {
    name : "getHit",
    frames: 4
  }  
];

animationStates.forEach((state,index) => {
  let frames = {
    loc :[]
  }

  for(let i=0; i<state.frames;i++){
    let positionX = i *spriteWidth;   
    let positionY = index * spriteHeight;
    frames.loc.push({x:positionX,y:positionY});
  }
  spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; //position is used to control the speed of the animation
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y; //frameY is used to control the vertical position of the animation
  
  // Draw the image on the canvas
  ctx.drawImage(
    playerImage,
    frameX, // Source X position (crop from sprite sheet)
    frameY , // Source Y position (crop from sprite sheet)
    spriteWidth, // Width of the cropped frame
    spriteHeight, // Height of the cropped frame
    0, // Destination X position on canvas
    0, // Destination Y position on canvas
    spriteWidth, // Width of the frame on canvas
    spriteHeight // Height of the frame on canvas
  );
    
  // if(gameFrame % staggerFrames == 0){
  //   if(frameX < 6){
  //     frameX++;
  //   }
  //   else{
  //     frameX =0;
  //   }
  // }
  
 
  gameFrame++;
  requestAnimationFrame(animate);

}
animate();


