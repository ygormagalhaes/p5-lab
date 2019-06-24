function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  createGuideLines(20);
  drawArcs();
}

function createGuideLines(distance) {
  push();
  strokeWeight(1);
  stroke(5);
  createHorizontalLines(distance);
  createVerticalLines(distance);
  pop();
}

function createHorizontalLines(distance) {
  for (let i = distance; i < height; i+=distance) {
    line(0, i, width, i);
  }
}

function createVerticalLines(distance) {
  for (let i = distance; i < width; i+=distance) {
    line(i, 0, i, height);
  }
}

function drawArcs() {
  push();
  noFill();
  stroke(100, 0, 0);
  for (let i = -(height/2); i <= width-(height/2); i+= radians(frameCount)) {
    arc(i, height/2, height, height, PI+HALF_PI, HALF_PI);
  }
  pop();
}
