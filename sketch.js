function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    showCoordinates();
  }
}
function showCoordinates(x, y) {
  let coordinates = mouseX + "," + mouseY;

  if (mouseX > 350) {
    text(coordinates, mouseX - 50, mouseY);
  } else {
    text(coordinates, mouseX, mouseY);
  }
}
