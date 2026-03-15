/*
  Prototyping With Code
  Fernando Aragon
  aragon.f@northeastern.edu
  Assignment[5]
  Pattern Title: Love Rendezvous
*/

let numStars = 50;
let starLocation = [];
let starRotate = [];
let starRotSpd = [];
let starSize = [];
let starInc = [];
let starMin = [];
let starMax = [];
let starClr = [];

let numLines = 10;
let lineLoc = [];
let lineLocMin = [];
let lineLocMax = [];
let lineVels = [];
let lineClr = [];

bckGndClr = "#0e151f";

let months= ["January", "February", " March", "April", "May", "June", "July", "August",
            "September", "October", "November", "Decembter"];

function preload() {
  font = loadFont("/assets/SpaceGrotesk-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(RADIUS);
  frameRate(30);

  for (let i = 0; i < numStars; i++) {
    starLocation.push([random(0, width - 10), random(0, height - 10)]);
    starSize.push(random(-100, 0));
    starMin.push(starSize[i]);
    starMax.push(random(0, 100));

    starInc.push(1);
    starRotate.push(0);
    starRotSpd.push(2 * random([1, -1]));

    starClr.push([random(20, 167), random(20, 197), random(51, 200)]);
  }
  for (let i = 0; i < numLines; i++) {
    if (i % 2 == 0) {
      lineLoc.push([
        0,
        random(height / 4, height),
        random(0, width / 2),
        height,
      ]);
      lineVels.push([0, random(-3, 3), random(-3, 3), 0]);
      lineLocMin.push([0, height / 4, 0, 0]);
      lineLocMax.push([0, height, width / 2, height]);
    } else {
      lineLoc.push([
        random(width / 2, width),
        0,
        width,
        random(0, (height * 3) / 4),
      ]);
      lineVels.push([random(-3, 3), 0, 0, random(-3, 3)]);
      lineLocMin.push([width / 2, 0, width, 0]);
      lineLocMax.push([width, 0, width, (height * 3) / 4]);
    }
    
    lineClr.push([random(0,255/2), random(240, 255),255])
  }
  
  
}

function draw() {
  background(bckGndClr);
  strokeWeight(0);
  for (let i = 0; i < numStars; i++) {
    fill(starClr[i][0], starClr[i][1], starClr[i][2], 150);
    fullStar(
      starLocation[i][0],
      starLocation[i][1],
      starRotate[i],
      starSize[i]
    );

    if (starSize[i] == starMin[i]) {
      starLocation[i][0] = random(0, width);
      starLocation[i][1] = random(0, height);
      starSize[i] = random(-100, 0);
      starMin[i] = starSize[i];
      starMax[i] = random(0, 100);
    }
  }
  for (let i = 0; i < numStars; i++) {
    starSize[i] += starInc[i];
    starRotate[i] += starRotSpd[i];

    if (starSize[i] <= starMin[i] || starSize[i] >= starMax[i]) {
      starInc[i] = -starInc[i];
      starRotSpd[i] = -starRotSpd[i];
    }
  }

  strokeWeight(5);
  for (let i = 0; i < numLines; i++) {
    stroke(lineClr[i][0], lineClr[i][1], lineClr[i][2], 100);
    line(lineLoc[i][0], lineLoc[i][1], lineLoc[i][2], lineLoc[i][3]);
  }
  for (let i = 0; i < numLines; i++) {
    lineLoc[i][0] += lineVels[i][0];
    lineLoc[i][1] += lineVels[i][1];
    lineLoc[i][2] += lineVels[i][2];
    lineLoc[i][3] += lineVels[i][3];

    for (let j = 0; j < lineLoc[i].length; j++) {
      if (
        lineLoc[i][j] <= lineLocMin[i][j] ||
        lineLoc[i][j] >= lineLocMax[i][j]
      ) {
        lineVels[i][j] = -lineVels[i][j];
      }
    }
  }
  
  let today = months[month() - 1] + " " + day() + ", " + year();
  let displayTime = hour() + ":";
  
  if (minute() < 10) {
    displayTime += "0" + minute() +":";
  } else {
    displayTime += minute() + ":";
  }
  
  if (second() < 10) {
    displayTime += "0" + second();
  } else {
    displayTime += second();
  }
  
  strokeWeight(1);
  textFont(font);
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(50);
  text(today, width/2, height/2);
  textSize(25);
  text(displayTime, width/2, height/2 + 50);
  
  
}


function fullStar(x, y, angle, size) {
  let starMult = 1.33;

  let starParam = [];
  starParam.push([0, 0, 0, size]);

  starParam.push([
    starMult * size * cos(radians(45)),
    starMult * size * sin(radians(45)),
    90,
    size,
  ]);

  starParam.push([
    0,
    starParam[1][1] + starMult * size * sin(radians(135)),
    180,
    size,
  ]);

  starParam.push([
    starParam[2][0] + starMult * size * cos(radians(225)),
    starParam[1][1],
    270,
    size,
  ]);

  if (size > 0) {
    push();

    translate(x, y);
    translate(0, starParam[1][1]);
    rotate(degrees(angle));

    push();
    noStroke();
    square(0, 0, size / (starMult * 3));
    pop();

    translate(0, -starParam[1][1]);

    for (let i = 0; i < starParam.length; i++) {
      starEdge(
        starParam[i][0],
        starParam[i][1],
        starParam[i][2],
        starParam[i][3]
      );
    }

    pop();
  }
}

function starEdge(x, y, angle, size) {
  let stretch = size * 2;

  let x1 = floor(size * cos(radians(60)));
  let y1 = floor(size * sin(radians(60)));
  let x2 = floor(size * cos(radians(180 - 60)));
  let y2 = floor(size * sin(radians(180 - 60)));

  let controlx0 = 0;
  let controly0 = 0 - stretch;

  let controlx1 = x1 + stretch;
  let controly1 = y1;

  let controlx2 = x2 - stretch;
  let controly2 = y2;

  push();
  translate(x, y);
  rotate(radians(angle));

  push();
  strokeWeight(1);
  stroke(bckGndClr);
  beginShape();
  vertex(x1, y1);
  vertex(0, 0);
  vertex(x2, y2);
  endShape();
  pop();

  push();
  fill(bckGndClr);
  curve(controlx0, controly0, 0, 0, x1, y1, controlx1, controly1);
  curve(controlx0, controly0, 0, 0, x2, y2, controlx2, controly2);
  pop();

  pop();
}
