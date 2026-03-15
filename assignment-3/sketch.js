/*  Fernando Aragon
    aragon.f@northeastern.edu
    Prototyping with Code, Lab 2, HW3 
    Self Portrait: Who I See Inside of Me
*/ 

// converts angles from radians to degrees
const toRad = (deg) => {
  rad = deg * (Math.PI / 180);
  
  return rad;
}

// used to check positions
const confirmPoint = (x, y) => {
  push();
  strokeWeight(5);
  stroke("red");
  point(x,y)
  pop();
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  background("#8aba86");

  // left ear lines
  let ear1XStart = 100;
  let ear1YStart = 30;
  let mag1 = 200;
  let angle1 = 105;
  let ear1XEndLeft = ear1XStart + (mag1 * Math.cos(toRad(angle1)));
  let ear1YEndLeft = ear1YStart + (mag1 * Math.sin(toRad(angle1)));
  let mag2  = 100;
  let phaseShift1 = 50;
  let angle2 = angle1 - phaseShift1;
  let ear1XEndRight = ear1XStart + (mag2 * Math.cos(toRad(angle2)));
  let ear1YEndRight = ear1YStart + (mag2 * Math.sin(toRad(angle2)));
  
  
  
  // right ear lines
  let ear2XStart = ear1XStart + 200;
  let ear2YStart = ear1YStart;
  let phaseShift2 = 180;
  let angle3 = phaseShift2 - angle2; 
  let ear2XEndLeft = ear2XStart + (mag2 * Math.cos(toRad(angle3)));
  let ear2YEndLeft = ear2YStart + (mag2 * Math.sin(toRad(angle3)));
  let phaseShift3 = 180;
  let angle4 = phaseShift3 - angle1;
  let ear2XEndRight = ear2XStart + (mag1 * Math.cos(toRad(angle4)));
  let ear2YEndRight = ear2YStart + (mag1 * Math.sin(toRad(angle4)));
  
  // between the ears part
  let topAnchorXLeft = ear1XEndRight;
  let topAnchorYLeft = ear1YEndRight;
  let topAnchorXRight = ear2XEndLeft;
  let topAnchorYRight = ear2YEndLeft;
  let controlMag = 100;
  let topCont1X = topAnchorXLeft + (controlMag * Math.cos(toRad(135)));
  let topCont1Y = topAnchorYLeft + (controlMag * Math.sin(toRad(135)));
  let topCont2X = topAnchorXRight + (controlMag * Math.cos(toRad(45)));
  let topCont2Y = topAnchorYRight + (controlMag * Math.sin(toRad(45)));
  
  // left cheek
  let anchorMag = 95;
  let anchorAngle = 80;
  let leftAnchorXTop = ear1XEndLeft;
  let leftAnchorYTop = ear1YEndLeft;
  let leftAnchorXBottom = leftAnchorXTop + (anchorMag * Math.cos(toRad(anchorAngle)));
  let leftAnchorYBottom = leftAnchorYTop + (anchorMag * Math.sin(toRad(anchorAngle)));
  let leftCont1X = leftAnchorXTop + (controlMag * Math.cos(toRad(angle1 + 180)));
  let leftCont1Y = leftAnchorYTop + (controlMag * Math.sin(toRad(angle1 + 180)));
  let controlMag2 = 200;
  let leftCont2X = leftAnchorXBottom + (controlMag2 * Math.cos(toRad(20)));
  let leftCont2Y = leftAnchorYBottom + (controlMag2 * Math.sin(toRad(20)));
  
 
  // right cheek
  anchorAngle = 180 - anchorAngle;
  let rightAnchorXTop = ear2XEndRight;
  let rightAnchorYTop = ear2YEndRight;
  let rightAnchorXBottom = rightAnchorXTop + (anchorMag * Math.cos(toRad(anchorAngle)));
  let rightAnchorYBottom = rightAnchorYTop + (anchorMag * Math.sin(toRad(anchorAngle)));
  let rightCont1X = rightAnchorXTop + (controlMag * Math.cos(toRad(angle4 + 180)));
  let rightCont1Y = rightAnchorYTop + (controlMag * Math.sin(toRad(angle4+ 180)));
  let rightCont2X = rightAnchorXBottom + (controlMag2 * Math.cos(toRad(180 - 20)));
  let rightCont2Y = rightAnchorYBottom + (controlMag2 * Math.sin(toRad(180 - 20)));
  
  
  // bottom
  let bottomAnchorXLeft = leftAnchorXBottom;
  let bottomAnchorYLeft = leftAnchorYBottom;
  let bottomAnchorXRight = rightAnchorXBottom;
  let bottomAnchorYRight = rightAnchorYBottom;
  
  controlMag = 150;
  let bottomCont1X = leftAnchorXTop + (controlMag * Math.cos(toRad(angle1 + 180)));
  let bottomCont1Y = leftAnchorYTop + (controlMag * Math.sin(toRad(angle1 + 180)));
  let bottomCont2X = rightAnchorXTop + (controlMag * Math.cos(toRad(angle4 + 180)));
  let bottomCont2Y = rightAnchorYTop + (controlMag * Math.sin(toRad(angle4+ 180)));
  
  // left ear color
  let leftEarV1X = ear1XStart + 2;
  let leftEarV1Y = ear1YStart + 5;
  let leftEarV2X = leftEarV1X + (mag2 * Math.cos(toRad(angle2+5)));
  let leftEarV2Y = leftEarV1Y + (mag2 * Math.sin(toRad(angle2 +5)));
  let leftEarV3X = leftEarV2X + (80 * Math.cos(toRad(155)));
  let leftEarV3Y = leftEarV2Y + (80 * Math.sin(toRad(155)));
  
  //right ear color
  let rightEarV1X = ear2XStart - 2;
  let rightEarV1Y = ear2YStart + 5;
  let rightEarV2X = rightEarV1X + (mag2 * Math.cos(toRad(angle3 - 5)));
  let rightEarV2Y = rightEarV1Y + (mag2 * Math.sin(toRad(angle3 - 5)));
  let rightEarV3X = rightEarV2X + (80 * Math.cos(toRad(180 - 155)));
  let rightEarV3Y = rightEarV2Y + (80 * Math.sin(toRad(180 - 155)));
  
  //eyes
  let leftEyeX = leftEarV3X + 20;
  let leftEyeY = leftEarV3Y + 65;
  let eyeR = 40;
  let rightEyeX = leftEyeX + 200;
  let rightEyeY = leftEyeY;
  
  // eyebrows
  let leftEyebrowV1X = leftEarV3X - 10;
  let leftEyebrowV1Y = leftEarV3Y + 20;
  let leftEyebrowV2X = leftEyebrowV1X + (90 * Math.cos(toRad(10)));
  let leftEyebrowV2Y = leftEyebrowV1Y + (90 * Math.sin(toRad(10)));
  let leftEyebrowV3X = leftEyebrowV2X + (10 * Math.cos(toRad(300)));
  let leftEyebrowV3Y = leftEyebrowV2Y + (10 * Math.sin(toRad(300)));
  let leftEyebrowV4X = leftEyebrowV3X + (90 * Math.cos(toRad(190)));
  let leftEyebrowV4Y = leftEyebrowV3Y + (90 * Math.sin(toRad(190)));
  
  let rightEyebrowV1X = rightEarV3X + 10;
  let rightEyebrowV1Y = rightEarV3Y + 40;
  let rightEyebrowV2X = rightEyebrowV1X + (90 * Math.cos(toRad(180)));
  let rightEyebrowV2Y = rightEyebrowV1Y + (90 * Math.sin(toRad(180)));
  let rightEyebrowV3X = rightEyebrowV2X + (10 * Math.cos(toRad(250)));
  let rightEyebrowV3Y = rightEyebrowV2Y + (10 * Math.sin(toRad(250)));
  let rightEyebrowV4X = rightEyebrowV3X + (100 * Math.cos(toRad(0)));
  let rightEyebrowV4Y = rightEyebrowV3Y + (100 * Math.sin(toRad(0)));
  
  
  // cheeks
  let leftCheekX = leftEarV3X - 15;
  let leftCheekY = leftEarV3Y + 100;
  let cheekW = leftEarV2X - leftEarV3X;
  let cheekH = 50;
  let rightCheekX = rightEarV3X + 15 - cheekW;
  let rightCheekY = leftCheekY;
  
  // mouth
  let mouthLeftX = topAnchorXLeft + 2;
  let mouthLeftY = topAnchorYLeft + 170;
  let mouthMidX = mouthLeftX + (40 * Math.cos(toRad(10)));
  let mouthMidY = mouthLeftY + (40 * Math.sin(toRad(10)));
  let mouthRightX = mouthMidX + (50 * Math.cos(toRad(330)));
  let mouthRightY = mouthMidY + (50 * Math.sin(toRad(330)));
  
  let mouthCont1X = mouthLeftX + (20 * Math.cos(toRad(80)));
  let mouthCont1Y = mouthLeftY + (20 * Math.sin(toRad(80)));
  let mouthCont2X = mouthMidX + (20 * Math.cos(toRad(160)));
  let mouthCont2Y = mouthMidY + (50 * Math.sin(toRad(160)));
  let mouthCont3X = mouthMidX + (20 * Math.cos(toRad(350)));
  let mouthCont3Y = mouthMidY + (20 * Math.sin(toRad(350)));
  let mouthCont4X = mouthRightX + (50 * Math.cos(toRad(100)));
  let mouthCont4Y = mouthRightY + (50 * Math.sin(toRad(100)));
  
  // coloring background
  beginShape();
  fill("white");
  stroke("white");
  strokeWeight(2);
  vertex(ear1XStart, ear1YStart);
  vertex(ear1XEndLeft, ear1YEndLeft);
  vertex(leftAnchorXBottom, leftAnchorYBottom);
  vertex(bottomAnchorXLeft,bottomAnchorYLeft);
  vertex(bottomAnchorXRight, bottomAnchorYRight);
  vertex(rightAnchorXBottom, rightAnchorYBottom);
  vertex(ear2XEndRight, ear2YEndRight);
  vertex(ear2XStart, ear2YStart);
  vertex(topAnchorXRight, topAnchorYRight);
  vertex(topAnchorXLeft, topAnchorYLeft);
  endShape();

  
  // drawing outline
  strokeWeight(0);
  stroke("black");
  line(ear1XStart, ear1YStart, ear1XEndLeft, ear1YEndLeft);
  line(ear1XStart, ear1YStart, ear1XEndRight, ear1YEndRight);
  line(ear2XStart, ear2YStart, ear2XEndLeft, ear2YEndLeft);
  line(ear2XStart, ear2YStart, ear2XEndRight, ear2YEndRight);
  curve(topCont1X, topCont1Y, topAnchorXLeft, topAnchorYLeft, topAnchorXRight,
        topAnchorYRight, topCont2X, topCont2Y);
  curve(leftCont1X, leftCont1Y, leftAnchorXTop, leftAnchorYTop, leftAnchorXBottom,
        leftAnchorYBottom, leftCont2X, leftCont2Y);
  curve(rightCont1X, rightCont1Y, rightAnchorXTop, rightAnchorYTop, rightAnchorXBottom,
        rightAnchorYBottom, rightCont2X, rightCont2Y); 
  curve(bottomCont1X, bottomCont1Y, bottomAnchorXLeft, bottomAnchorYLeft, 
        bottomAnchorXRight, bottomAnchorYRight, bottomCont2X, bottomCont2Y);
  
  // ear colors
  strokeWeight(0);
  fill("#ffe3b0");
  triangle(leftEarV1X, leftEarV1Y, leftEarV2X, leftEarV2Y, leftEarV3X, leftEarV3Y);
  triangle(rightEarV1X, rightEarV1Y, rightEarV2X, rightEarV2Y, rightEarV3X, rightEarV3Y);
  
  // eyes
  fill("black");
  circle(leftEyeX, leftEyeY, eyeR);
  circle(rightEyeX, leftEyeY, eyeR)
  
  //eyebrows
  beginShape();
  vertex(leftEyebrowV1X, leftEyebrowV1Y);
  vertex(leftEyebrowV2X, leftEyebrowV2Y);
  vertex(leftEyebrowV3X, leftEyebrowV3Y);
  vertex(leftEyebrowV4X, leftEyebrowV4Y);
  endShape();
  beginShape();
  vertex(rightEyebrowV1X, rightEyebrowV1Y);
  vertex(rightEyebrowV2X, rightEyebrowV2Y);
  vertex(rightEyebrowV3X, rightEyebrowV3Y);
  vertex(rightEyebrowV4X, rightEyebrowV4Y);
  endShape();
  
  // cheeks
  fill("#fbbfb7");
  rect(leftCheekX, leftCheekY, cheekW, cheekH, 40);
  rect(rightCheekX, rightCheekY, cheekW, cheekH, 40);
  
  // mouth
  strokeWeight(10);
  noFill();
  bezier(mouthLeftX,mouthLeftY, mouthCont1X, mouthCont1Y, mouthCont2X, mouthCont2Y, mouthMidX,
         mouthMidY);
  bezier(mouthMidX,mouthMidY, mouthCont3X, mouthCont3Y, mouthCont4X, mouthCont4Y, mouthRightX,
         mouthRightY);
  
  // text
  
  fill("white")
  stroke("black");
  strokeWeight(0);
  textSize(20);
  text("Toro Inoue Is Me" ,ear1XStart + 15, ear1YStart);
  text("I am him", ear1XStart + 60, ear1YStart + 350)
  
}

