import kaplay from 'kaplay';
kaplay();
const dinosaur = add([
  // while components gives different behaviours to the game obj
  rect(32, 32), // draw a rect
  pos(80, 80), // set a position
  // tags classify the game object
  "dangerous",
  "big",
]);