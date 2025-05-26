let x = 0;
let paused = false;
let initialX = 0;

function setup() {
  createCanvas(400, 200);
  x = initialX;
}

function draw() {
  if (!paused) {
    background(240);
    ellipse(x, height / 2, 50, 50);
    x += 2;
    if (x > width) x = 0;
  }
}

function startSketch() {
  paused = false;
  loop();
}

function pauseSketch() {
  paused = true;
  noLoop();
}

function resetSketch() {
  x = initialX;
  paused = false;
  loop();
}
