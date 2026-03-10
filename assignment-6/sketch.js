/*
  Prototyping With Code
  Fernando Aragon
  aragon.f@northeastern.edu
  Assignment[6]
  Instructions:
  To begin drawing, click the "Set Canvas Size" button. 

  The user will be prompted if they want square pixels to draw in. If the user inputs Y or y, the user will then be prompted to set the amount of pixels they want to fill the width of the screen with, or in other words, the amount of pixels in a row. The canvas will then be filled with that many pixels across and also have pixels down, filling up as much as the screen as they can.

  If the user inputs N or n, the user will also be prompted to the set the amount of pixels they want to fill the width of the screen with and then be prompted to set the amountt of pixels they wat to fill the height of the screen with. In other words, the user will set the amount of pixels in a row and the amount of pixels in a column. This will create pixels that aren't squares.

  This button can be used throughout the usage of the program, clearing the screen and setting a new canvas.

  If the user wishes to remove all the work they have made, they can use the "Clear Canvas" button, which will redraw the canvas with the same specifications they listed when they used the "Set Canvas Size" button.

  The user can also set the RGB values of the color they wish to color with by using the three sliders for red green and blue. The chosen color is shown in the rectangle under the sliders.

  The user can also save their drawing by pressing "s" or "S" on their keyboard
  
*/

let settingsWidth, settingsHeight;
let gridWidth, gridHeight;
let pixelSquare = true;
let pixelWidth, pixelHeight;

let gridXStart = [];
let gridYStart = [];
let gridStatus = true;

let clickTime1 = 0;
let clickTime2 = 0;
let clickTime3 = 0;
let debounceTime = 1000;

let sliderControlX = [];
let sliderControlY = [];

let dragging = false;

let pixelColor = [127, 127, 127];

function setup() {
  createCanvas(windowWidth, windowHeight);
  settingsWidth = width * 0.15;
  settingsHeight = height;

  for (let i = 0; i < 3; i++) {
    sliderControlX.push(settingsWidth/2);
  }
 
  background(255);
}

function draw() {
  settings();
  colorGrid(pixelColor[0], pixelColor[1], pixelColor[2]);
}

function settings() {
  fill(220);
  rect(0, 0, settingsWidth, settingsHeight);

  setCanvasSizeButton();
  clearCanvasButton();

  push();
  fill("black");
  textSize(settingsWidth * 0.08);
  textAlign(CENTER, CENTER);
  let canvasSizeText;
  if (pixelWidth == undefined) {
    gridWidth = 0;
    gridHeight = 0;
    canvasSizeText = gridWidth + " x " + gridHeight + " Canvas";
  } else {
    if (gridXStart)
    canvasSizeText = gridWidth + " x ";
    if (pixelSquare) {
      canvasSizeText += findNumPixelTall() + " Canvas";
    } else {
      canvasSizeText += gridHeight + " Canvas";
    }
  }

  text(canvasSizeText, settingsWidth/2, settingsHeight * 0.25);
  pop();


  slider(settingsWidth/2, 60 + (3 * settingsHeight * 0.1), "red", 0);
  slider(settingsWidth/2, 60 + (4 * settingsHeight * 0.1), "green", 1);
  slider(settingsWidth/2, 60 + (5 * settingsHeight * 0.1), "blue", 2);
  resultingColor(pixelColor[0], pixelColor[1], pixelColor[2]);

  push();
  fill("black");
  textSize(settingsWidth * 0.08);
  textAlign(CENTER, CENTER);
  text("Press the \"S\" key to \n save your drawing", settingsWidth/2, settingsHeight * 0.9);
  pop();

}

function setCanvasSizeButton() {
  let buttonColor;
  let buttonCenterX = settingsWidth/2;
  let buttonCenterY = 60;
  let buttonWidth = settingsWidth - 30;
  let buttonHeight = settingsHeight * 0.1;

  let buttonMinX = buttonCenterX - (buttonWidth/2);
  let buttonMaxX = buttonCenterX + (buttonWidth/2);
  let buttonMinY = buttonCenterY - (buttonHeight/2);
  let buttonMaxY = buttonCenterY + (buttonHeight/2);


  if (mouseX > buttonMinX && mouseX < buttonMaxX && mouseY > buttonMinY && mouseY < buttonMaxY) {
    buttonColor = 150;

    if(mouseIsPressed && mouseButton == LEFT && (millis()- clickTime1 > debounceTime || clickTime1 == 0)) {
      clickTime1 = millis();
      let answer;

      do {
        answer = prompt("Square pixels? (Y/N)");
        answer = answer.toLowerCase();
      } while (answer !== "y" && answer !== "n");
      
      gridWidth = Number(prompt("How Many Pixels Wide?"));
      
      if (answer === "n") {
        gridHeight = Number(prompt("How Many Pixels Tall?"));
        pixelSquare = false;
      } else {
        pixelSquare = true;
      }
      answer = "";

      drawGrid(gridWidth, gridHeight, true, "black");
    }

  } else {
    buttonColor = 220;
  }

  push();
  fill(buttonColor);
  rectMode(CENTER);
  rect(buttonCenterX, buttonCenterY, buttonWidth, buttonHeight);
  fill("black");
  buttonText = "Set Canvas Size";
  textSize(settingsWidth * 0.08);
  textAlign(CENTER, CENTER);
  text(buttonText, settingsWidth/2, buttonCenterY);
  pop();

  
}

function clearCanvasButton() {
  let buttonColor;
  let buttonCenterX = settingsWidth/2;
  let buttonCenterY = 60 + settingsHeight * 0.1;
  let buttonWidth = settingsWidth - 30;
  let buttonHeight = settingsHeight * 0.1;

  let buttonMinX = buttonCenterX - (buttonWidth/2);
  let buttonMaxX = buttonCenterX + (buttonWidth/2);
  let buttonMinY = buttonCenterY - (buttonHeight/2);
  let buttonMaxY = buttonCenterY + (buttonHeight/2);

  if (mouseX > buttonMinX && mouseX < buttonMaxX && mouseY > buttonMinY && mouseY < buttonMaxY) {
    buttonColor = 150;

    if(mouseIsPressed && mouseButton == LEFT && (millis()- clickTime2 > debounceTime || clickTime2 == 0)) {
      clickTime2 = millis();
      if (gridWidth == undefined || gridHeight == undefined) {
        drawGrid(0, 0, true, "black");
      } else {
        drawGrid(gridWidth, gridHeight, true, "black");
      }
    }

  } else {
    buttonColor = 220;
  }

  
  push();
  fill(buttonColor);
  rectMode(CENTER);
  rect(buttonCenterX, buttonCenterY, buttonWidth, buttonHeight);
  fill("black");
  buttonText = "Clear Canvas";
  textSize(settingsWidth * 0.08);
  textAlign(CENTER, CENTER);
  text(buttonText, settingsWidth/2, buttonCenterY);
  pop();

}

function toggleGridButton() {
  let buttonColor;
  let buttonCenterX = settingsWidth/2;
  let buttonCenterY = 60 + settingsHeight * 0.2;
  let buttonWidth = settingsWidth - 30;
  let buttonHeight = settingsHeight * 0.1;

  let buttonMinX = buttonCenterX - (buttonWidth/2);
  let buttonMaxX = buttonCenterX + (buttonWidth/2);
  let buttonMinY = buttonCenterY - (buttonHeight/2);
  let buttonMaxY = buttonCenterY + (buttonHeight/2);

  if (mouseX > buttonMinX && mouseX < buttonMaxX && mouseY > buttonMinY && mouseY < buttonMaxY) {
    buttonColor = 150;

    if(mouseIsPressed && mouseButton == LEFT && (millis()- clickTime3 > debounceTime || clickTime3 == 0)) {
      clickTime3 = millis();

      if (gridStatus) {
        gridStatus = false;
      } else {
        gridStatus = true;
      }

      let gridColor = gridStatus ? 0 : 255;

      drawGrid(gridWidth, gridHeight, false, gridColor);
    }

  } else {
    buttonColor = 220;
  }

  push();
  fill(buttonColor);
  rectMode(CENTER);
  rect(buttonCenterX, buttonCenterY, buttonWidth, buttonHeight);
  fill("black");
  buttonText = "Toggle Grid";
  textSize(settingsWidth * 0.08);
  textAlign(CENTER, CENTER);
  text(buttonText, settingsWidth/2, buttonCenterY);
  pop();


}

function slider(xCenter, yCenter, color, k) {
  let sliderCenterX = xCenter;
  let sliderCenterY = yCenter;
  let sliderWidth = settingsWidth - 70;
  let sliderHeight = settingsHeight * 0.025;
  let sliderRadius = 100;

  let sliderMinX = sliderCenterX - (sliderWidth/2);
  let sliderMaxX = sliderCenterX + (sliderWidth/2);
  let sliderMinY = sliderCenterY - (sliderHeight/2);
   
  let sliderControlRadius = sliderRadius / 3;
  let sliderControlMinX = sliderControlX[k] - sliderControlRadius;
  let sliderControlMaxX = sliderControlX[k] + sliderControlRadius;
  let sliderControlMinY = sliderControlY[k] - sliderControlRadius;
  let sliderControlMaxY = sliderControlY[k] + sliderControlRadius;


  if (mouseIsPressed && mouseButton == LEFT) {
    if (!dragging && mouseX >= sliderControlMinX && mouseX <= sliderControlMaxX && mouseY >= sliderControlMinY && mouseY <= sliderControlMaxY) {
      dragging = true;
    }

    if (dragging && mouseY >= sliderControlMinY && mouseY <= sliderControlMaxY) {
      sliderControlX[k] = constrain(mouseX, sliderMinX, sliderMaxX);
    }
  } else {
    dragging = false;
  }
  sliderControlY[k] = sliderCenterY;

  value = Math.floor(map(sliderControlX[k], sliderMinX, sliderMaxX, 0, 255));

  push();
  rectMode(CENTER);
  rect(sliderCenterX, sliderCenterY, sliderWidth, sliderHeight);
  
  push();
  noFill();
  rectMode(CORNER);

  let divisions = (sliderMaxX - sliderMinX)/52;

  for (let i = sliderMinX; i < sliderMaxX; i+= divisions) {
    let j = Math.floor(map(i, sliderMinX, sliderMaxX, 0, 255));
    if (color == "red") {
      stroke(j, 0, 0);
      fill(j, 0, 0);
    } else if (color == "green") {
      stroke(0, j, 0);
      fill(0, j, 0);
    } else if (color == "blue") {
      stroke(0, 0, j);
      fill(0, 0, j);
    }

    rect(i, sliderMinY,divisions, sliderHeight);
  }
  pop();

  circle(sliderControlX[k], sliderControlY[k], sliderControlRadius);

  fill("black");
  textSize(settingsWidth * 0.08);
  textAlign(CENTER, CENTER);
  text(value, settingsWidth/2, sliderCenterY + (settingsHeight * 0.035));
  pop();
  
  if (color == "red") {
    pixelColor[0] = value;
  } else if (color == "green") {
    pixelColor[1] = value;
  } else if (color == "blue") {
    pixelColor[2] = value;
  }
}

function resultingColor(r, g, b) {
  let rectCenterX = settingsWidth/2;
  let rectCenterY = 60 + (6 * settingsHeight * 0.1);
  let rectWidth = settingsWidth - 70;;
  let rectHeight = settingsHeight * 0.025;

  push();
  fill(r, g, b);
  rectMode(CENTER);
  rect(rectCenterX, rectCenterY, rectWidth, rectHeight);
  pop();
}

function drawGrid(gridWidth, gridHeight, background, strokeColor) {
  if (background) {
    push();
    fill("white");
    rect(settingsWidth, 0, width, height);
    pop();
  }
  gridXStart = [];
  gridYStart = [];

  pixelWidth = (width - settingsWidth) / gridWidth;

  push();
  stroke(strokeColor);
  fill(strokeColor);
  for (let i = settingsWidth; i < width; i += pixelWidth) {
    line(i, 0, i, height);
    gridXStart.push(i);
  }

  pixelHeight = pixelSquare ? (width - settingsWidth) / gridWidth : height/ gridHeight;

  for (let i = 0; i < height; i += pixelHeight) {
    line(settingsWidth, i, width, i);
    gridYStart.push(i);
  }
  pop();
}

function colorGrid(r, g, b) {
  if (mouseButton == LEFT && mouseIsPressed && pixelHeight != undefined && pixelWidth != undefined) {
    fill(r, g, b);
    let x = findPixelCoord(gridXStart, 0, gridXStart.length - 1, true);
    let y = findPixelCoord(gridYStart, 0, gridYStart.length - 1, false);

    if (x >= settingsWidth) {
      push();
      if (gridStatus) {
        stroke(0);
      } else {
        stroke(r, g, b);
      }
      rect(x, y, pixelWidth, pixelHeight);
      pop();
    }
    
  }
}

function findPixelCoord(arr, start, end, param) {
  if (start > end) return 0;

  let mid = Math.floor((start + end) / 2);

  let length = param ? pixelWidth : pixelHeight;
  let coord = param ? mouseX : mouseY;
  let max = arr[mid] + length;
  let min = arr[mid];

  if ((coord >= min) && (coord <= max)) return arr[mid];

  if (max < coord) {
    return findPixelCoord(arr, mid + 1, end, param);
  } else if (coord < min) {
    return findPixelCoord(arr, start, mid - 1, param);
  }

}

function findNumPixelTall() {
  for (let i = 0; i < gridYStart.length; i++) {
    if (gridYStart[i] + pixelHeight >= height) {
      return i;
    }
  }
}

function keyPressed() {
  if (key == "s" || key == "S") {
    let img = get(settingsWidth, 0, width - settingsWidth, height);
    img.save("drawing");
  }
}





