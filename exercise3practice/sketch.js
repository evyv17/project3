let input, button, result, question, submit, answer;

let c;

let Answer1;

let colorInput = document.getElementById('color-input');

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'Who was the first woman ever inducted into the Rock and Roll Hall of Fame?');
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


// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function output() {
  const answers = input.value();
  input.value('');

  //let vs const --> const= staying the same vs let= changes

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  // Answer1.innerHTML = answers;
  //innerHTML changing the actual words inside the paragraph tag - change what something is saying, 
  // = answers: --> returning a string, depending on what string it writes, itll change

  if (answers == "Aretha Franklin"){
    background(201, 245, 191);
    // Answer1.innerHTML = answers;
    let a = createA('page2.html', 'next question');
    // ('file name', 'what it will say')
    a.id('next');
    colorInput.appendChild(next);

  } else {
    Answer1.innerHTML = "Incorrect, try again!";
    background(194, 81, 79)
  }
}


