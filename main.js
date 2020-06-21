var config = {
  apiKey: "AIzaSyBjDB9eazFJQ6SrQFNHQesxIi9bbnXZTTw",
  authDomain: "collab-sketch-c7fb9.firebaseapp.com",
  databaseURL: "https://collab-sketch-c7fb9.firebaseio.com",
  projectId: "collab-sketch-c7fb9",
  storageBucket: "collab-sketch-c7fb9.appspot.com"
};
// Initialize Firebase
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {
  console.log("setup");
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);

  pointsData.on('child_added', function (point) {
    console.log("child_added called");
    points.push(point.val());
  })

  canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
  background(255)

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    circle(point.x, point.y, 5);
  }
}

function drawPoint() {
  console.log("drawpoint called");
  pointsData.push({ x: mouseX, y: mouseY })
}

function drawPointIfMousePressed() {
  if (mouseIsPressed) {
    console.log("mouse is pressed");
    drawPoint();
  }
}