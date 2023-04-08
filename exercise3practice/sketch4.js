let input, button, result, question, submit, answer;

let c;

let Answer1;

let colorInput = document.getElementById('color-input');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', "The Weeknd samples which '80s megahit in his song 'Blinding Lights?'");
    result.style('font-size', '40px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}


function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function output() {
  const answers = input.value();
  input.value('');



  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  // Answer1.innerHTML = answers;
  

  if (answers == "Take On Me"){
    background(201, 245, 191);
    // Answer1.innerHTML = answers;
    let a = createA('page5.html', 'next question');
    a.id('next');
    colorInput.appendChild(next);
  } else {
    Answer1.innerHTML = "Incorrect, try again!";
    background(194, 81, 79);
  }
}


