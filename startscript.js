//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let acoustic, electric,red, star1, star2;

// //declare variable up at the top
let mySound1, mySound2;

// //load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/ledzeppelin.mp3');
  mySound2 = loadSound('audio/fleetwoodmac.mp3');
  mySound3 = loadSound ('audio/metallica.mp3');
  mySound4 = loadSound ('audio/android.mp3');
  mySound5 = loadSound ('audio/bell.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    acoustic = createImg("images/acousticguitar.png");
    acoustic.class('guitar');
    acoustic.position(250, 200);
    acoustic.size(350,500);

    electric = createImg("images/electricguitar.png");
    electric.class('guitar');
    electric.position(500, 200);
    electric.size(350,500);
    
    red = createImg("images/red.png");
    red.class('guitar');
    red.position(750, 200);
    red.size(450,450);
}


  function draw() {
    background(0);
    acoustic.mousePressed(makeAcoustic);
    electric.mousePressed(makeElectric);
    red.mousePressed(makeRed);
  }

  function makeAcoustic() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeElectric() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
}

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

