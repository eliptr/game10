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
var piece = new Image();

piece.src = "images/piece.png";



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
  pX = 10;
  pY = 10;

  draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';


  //drawImage
  ctx.drawImage(piece, pX, pY);


  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
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
