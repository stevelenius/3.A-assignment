// radial.js
//
// Constructs a rainbow-colored radial graphic
// with choice of ellipse, line or quad
//
// Allows choice of rotation intervals from 2 to 7 degrees
// 

// Set up color value arrays for red, green and blue (24 color combinations)
let redFillColors = [255, 255, 255, 255, 255, 192, 128, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 128, 192, 255, 255, 255, 255];
let greenFillColors = [0, 64, 128, 192, 255, 255, 255, 255, 255, 255, 255, 255, 255, 192, 128, 64, 0, 0, 0, 0, 0, 0, 0, 0];
let blueFillColors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 128, 192, 255, 255, 255, 255, 255, 255, 255, 255, 255, 192, 128, 64];

// Set up index for grabbing sets of color values
let colorIndex = 0;

// Prompt user to choose shape
let armShape = prompt('Please enter 8 (for ellipse), 9 (for line, or 0 (for quad).');

// Prompt user to choose rotation value
let interval = prompt('Please enter a number from 2 to 7. This will be the rotation interval in degrees.\n\n(Once the graphic is running, click on it to stop, then refresh browser window to run the graphic again with new parameters.');

// Change user input to numerical value
let intervalNumber = Number(interval);

// Assign interval number to rotateBy variable
let rotateBy = intervalNumber;

// p5.js setup: black canvas, angles in degrees, stroke weight of 1
function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
  angleMode(DEGREES);
  strokeWeight(1);
}

// set up functions for three arm shapes
function makeArmEllipse() {
  translate(300, 300);
  rotate(rotateBy);
  ellipse(0, -125, 50, 250);
  rotateBy += intervalNumber;
}
function makeArmLine() {
  translate(300, 300);
  rotate(rotateBy);
  line(0, 25, 0, 250);
  rotateBy += intervalNumber;
}
function makeArmQuad() {
  translate(300, 300);
  rotate(rotateBy);
  quad(0, 25, 15, 125, 0, 250, -15, 125);
  rotateBy += intervalNumber;
}

// p5.js draw function
function draw () {
// grab RGB color values from color arrays using color index
  let redFill = redFillColors[colorIndex];
  let greenFill = greenFillColors[colorIndex];
  let blueFill = blueFillColors[colorIndex];
// set stroke color to grabbed values, and set no fill
  stroke(redFill, greenFill, blueFill);
  noFill();
// run proper makeArm function based on user input
  if (armShape === "0") {
    makeArmQuad();
  } else {
      if (armShape === "9") {
        makeArmLine();
      } else {
        makeArmEllipse();
      }
  }

// if all 24 color combinations have been used (i.e. colorIndex is set to 23), 
// set the color index number to 0 to start over again at the beginning of 
// the array. Otherwise, increment the color index number by one.
  if (colorIndex === 23) {
    colorIndex = 0;
    } else {
    (colorIndex ++);
  }
}
// Close draw function

// When mouse is pressed, stop looping
function mousePressed() {
  noLoop();
} 