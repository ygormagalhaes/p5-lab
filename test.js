const FULL_WIDTH = 220;
const FULL_HEIGHT = 170;
const BG_COLOR = 100;

function createGuideLines() {
  line(14, 0, 65, FULL_HEIGHT);
  line(65, FULL_HEIGHT, 14+69, 0);
  line(14+69+57, 0, 65+97, FULL_HEIGHT);
  line(65+97, FULL_HEIGHT, FULL_WIDTH-11, 0);
}

// TODO: Guardar lista com pontos de cada shape.
function createMainShapes() {
  const mainShapes = [];
  mainShapes.push([[14, 0], [65, FULL_HEIGHT], [0, FULL_HEIGHT], [0, 0]]);
  mainShapes.push([[65, FULL_HEIGHT], [14+69, 0], [14+69+57, 0], [65+97, FULL_HEIGHT]]);
  mainShapes.push([[FULL_WIDTH-11, 0], [FULL_WIDTH, 0], [FULL_WIDTH, FULL_HEIGHT], [FULL_WIDTH-58, FULL_HEIGHT]]);
  drawMainShapes(mainShapes);
}

function drawMainShapes(shapes) {
  shapes.forEach(shape => {
    noFill();
    beginShape();
    shape.forEach(vertexPoints => vertex(vertexPoints[0], vertexPoints[1]));
    endShape(CLOSE);
  });
}

function setup() {
  createCanvas(FULL_WIDTH, FULL_HEIGHT);
  background(BG_COLOR);
  createMainShapes();
}

function draw() {
}
