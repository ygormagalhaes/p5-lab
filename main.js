const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const FRAME_RATE = 60;

function setup() {
  frameRate(FRAME_RATE);
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(0);
  noStroke();
  randomFillColor();
}

function randomFillColor() {
  fill(color(random(0,255), random(0,255), random(0,255)));
}

function draw() {
  circleTest();
}

let circleXPos = 0;
let circleYPos = 0;
let circleSpeed = () => random(1, 20) * random(-1, 1);
function circleTest() {
  function getPosition() {
    return [circleXPos+=circleSpeed(), circleYPos+=circleSpeed()]; 
  }
  const circleDiameter = () => random(1, 20);
  
  if (!isInsideCanvas(circleXPos, circleYPos)) {
    circleXPos = random(0, CANVAS_WIDTH);
    circleYPos = random(0, CANVAS_HEIGHT);
    randomFillColor();
  }
  
  circle(...getPosition(), circleDiameter()); 
}

function isInsideCanvas(x, y) {
  if (x >= 0 && x <= CANVAS_WIDTH && y >= 0 && y <= CANVAS_HEIGHT) {
    return true;
  }
  return false;
}
