let days = [];

let instrument, band, icon;

let electricguitar, acousticguitar, acdc, davidbowie, ledzeppelin, prince;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;


function preload(){
  electricguitar = loadImage('images/electricguitar.png');
  acousticguitar= loadImage('images/acousticguitar.png');
  acdc= loadImage('images/acdc.png');
  davidbowie= loadImage('images/davidbowie.png');
  prince= loadImage('images/prince.png');
  ledzeppelin = loadImage('images/ledzeppelin.png');
}


function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter');
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(display);

  background(0);
}


function draw() {
  instrument = document.getElementById('instrument').value;
  band = document.getElementById('band').value;
  icon = document.getElementById('icon').value;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function display() {
  background(0);

  if (instrument == "electricguitar"){
    image(electricguitar, 400, 200);
  } 

  else if (instrument == "acousticguitar"){
    image(acousticguitar, 400, 200);
  }

  if (band == 'ledzeppelin'){
    image(ledzeppelin, 400, 200);
  } 

  else if (band == 'ACDC'){
    image(acdc, 400, 200);
  }
  
  if(icon == "davidbowie"){
    image(davidbowie, 400, 200);
  }

  else if (icon == "prince"){
    image(prince, 200, 100);
  } 
}















//   // strokeWeight(10);
//   // line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
//   // spacex += 200;
//   // if(spacex > 1000){
//   //   spacex = 0;
//   //   spacey += 200;
//   // }


// function add() {
//   days.push({
//     date: Date(),
//     instrument: instrument,
//     band: band,
//     icon: icon
//   })
//   console.log(days);
//   console.log("day submitted")

//   display();
// }