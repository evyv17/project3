let days = [];

let instrument, band, icon, img;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
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
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}



function setup(){ 

  
  if (instrument == "an electric guitar"){
  } 

  else if (instrument == "an acoustic guitar"){
    
  }

  
  // else if ( weather == "gloomy"){
  //   fill(64, 59, 156)
  // }

 
  noStroke();
  rect(350+spacex, 400+spacey, 100, 100)
  if (band == 'Led Zeppelin'){
    fill(255, 0, 247)
  } 
  
  else if (band == 'Hall N Oates'){
    fill(31, 96, 181)
  }



  noStroke();
  ellipse(300+spacex, 400+spacey, 100, 100)
  if(icon == "David Bowie"){
    stroke(87, 112, 250)
  }
  
  else if (icon == "Prince"){
    stroke(17, 6, 145)
  } 
  
  else if(icon =="Whitney Houston"){
    stroke(25, 97, 17)
  }


  strokeWeight(10);
  line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }



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