var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');

function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  // onpaus things...
}

function onResume() {
    test()
}

//variabels
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

// load images
var ball = new Image();
var bg = new Image();

ball.src = "images/ball2.png";
bg.src = "images/bg2.png";



// onlaod runs one time and in the end runs draw with requestAnimationFrame
function test() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  // fixed canvas resolution
  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  // positions var
  bX = 300;
  bY = 100;
  gravity = 0.98;
  gravitySpeed = 0;
  bounce = 0.6;
  test = 42;
  draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  gravitySpeed += gravity;
  bY += gravitySpeed;
  hitbottom()


  //drawImage
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(ball, bX, bY);
  ctx.fillText(gravitySpeed, 10, 10);
  ctx.fillText(gravity, 10, 20);
  ctx.fillText(gravitySpeed, 10, 30);


  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}

document.getElementById("canvas").addEventListener("click", cl);

function hitbottom() {
  var rockbottom = canvasMain.height - 100;
  if (bY > rockbottom) {
    bY = rockbottom;
    gravitySpeed = 0;
    // gravitySpeed = -(gravitySpeed * bounce);
  }
}

function cl() {
  gravitySpeed = -(test * bounce);
}

/*function counter() {
    var i = 0;
    var num = 0;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 100) clearInterval(this);
        else num = num + 1; text = num;
    }, 1000);
} // End
counter()*/
