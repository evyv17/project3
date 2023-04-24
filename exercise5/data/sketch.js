let days = [];

let instrument, band, icon;

let electricguitar, acousticguitar, ACDC, davidbowie, ledzeppelin, prince;


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
}



function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter');
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

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


function enter() {
  if (instrument == "an electric guitar"){
    img = ('images/electricguitar.png')
  } 
  else if (instrument == "an acoustic guitar"){
    img = ('images/acousticguitar.png')
  }

  if (band == 'Led Zeppelin'){
    img = ('images/ledzeppelin.png')
  } 


  else if (band == 'ACDC'){
    img = ('images/acdc.png')
  }
 

  if(icon == "David Bowie"){
    img = ('images/davidbowie.png')
  }
  
  else if (icon == "Prince"){
    img = ('images/prince.png')
  } 
  

  // strokeWeight(10);
  // line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  // spacex += 200;
  // if(spacex > 1000){
  //   spacex = 0;
  //   spacey += 200;
  // }

}

function add() {
  days.push({
    date: Date(),
    instrument: instrument,
    band: band,
    icon: icon
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}