/*
  Prototyping With Code
  Fernando Aragon
  aragon.f@northeastern.edu
  Assignment[4]
  Screensaver Title: Wave
*/
let phi;
function setup() {
  createCanvas(1024, 1024);

  phi = TAU * (2 / 3);
}

function draw() {
  noStroke();
  for (let i = 0; i < width; i = i + width / 100) {
    for (let j = 0; j < height; j = j + height / 100) {
      let r = map(j, 0, width, 130, 124);
      let g = map(j, 0, height, 235, 150);
      fill(r, g, 232);
      square(i, j, i + width / 10);
    }
  }
  
  strokeWeight(5);
  stroke("white");
  noFill();
  for (let i = 0; i < width; i = i + width / 6) {
    for (let j = 0; j < height; j = j + height /6) {
      for (let k = 0; k < TAU; k = k + TAU / 2) {
        spiral(i, j, height / 50, 3, phi + k);
        spiral(i, j - 2, height / 50, 3, phi + k);
        spiral(i - 2, j - 4, height / 50, 3, phi + k);
      }
    }
  }
  
  phi = phi + (TAU/250);
}

function spiral(x, y, mag, length, angle) {
  push();
  translate(x, y);
  rotate(angle);
  let fib1 = 1;
  let fib2 = 1;
  let width1, height1, width2, height2;

  let currentX = 0;
  let currentY = 0;

  let start = TAU * (3 / 4);
  let end = TAU;

  for (let i = 0; i < length; i++) {
    width1 = fib1 * mag;
    height1 = fib1 * mag;

    width2 = fib2 * mag;
    height2 = fib2 * mag;

    if (i % 2 == 0) {
      width1 = -width1;
      height1 = -height1;

      width2 = -width2;
    } else {
      height2 = -height2;
    }

    arc(currentX + width1, currentY, width1 * 2, height1 * 2, start, end);

    currentX = currentX + width1;
    currentY = currentY + height1;
    start = start - TAU / 4;
    end = end - TAU / 4;

    arc(currentX, currentY + height2, width2 * 2, height2 * 2, start, end);

    currentX = currentX + width2;
    currentY = currentY + height2;
    start = start - TAU / 4;
    end = end - TAU / 4;

    fib1 = fib1 + fib2;
    fib2 = fib2 + fib1;
  }
  pop();
}

function keyPressed() {
  // Was it the upper/lower 'S' key?
  if (key == 'S' || key == 's') {
    saveCanvas("assignment[4]_pattern_aragon_fernando");
  }
}

