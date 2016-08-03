$(document).ready(function () {
//declared empty strings to hold the user's choice and the randomized color;
  var color = '';
  var userChoice = '';

//call the functions to append the colors to the DOM, generate a random number, append the question to the DOM;
  addBlocks();
  randomNumber();
  addColor();

//appends to the section 'class';
  function addColor() {
    $('.color').append('<h2>' + 'What shade of green is ' + color + '</h2>');
  }

//functions will append on one div;
  function addBlocks() {
    $('#blocks').append('<div>' + '<button class="block1">' + '<button class="block2">' + '<button class="block3">' + '<button class="block4">' + '<button class="block5">' + '<button class="block6">' + '</div>');
  }

//function will compare the user's choice with the randomized color; will call after the user selects;
  function compareColors() {
    if (color == userChoice) {
      alert('Good job! You know your greens! Play again!');
      setTimeout(location.reload.bind(location), 2000);
    }else {
      alert('You are incorrect! You selected ' + userChoice + '. Better study up on your greens! Try again.');
      setTimeout(location.reload.bind(location), 2000);
    }
  }

//upon click, stores the selection to the var userChoice and then initiates the compareColors function;
  $('.block1').click(function () {
    userChoice = 'Green Yellow';
    compareColors();
  });

  $('.block2').click(function () {
    userChoice = 'Lawn Green';
    compareColors();
  });

  $('.block3').click(function () {
    userChoice = 'Lime';
    compareColors();
  });

  $('.block4').click(function () {
    userChoice = 'Lime Green';
    compareColors();
  });

  $('.block5').click(function () {
    userChoice = 'Light Green';
    compareColors();
  });

  $('.block6').click(function () {
    userChoice = 'Spring Green';
    compareColors();
  });

//random color generator; assigned a value to a green;
  function randomNumber() {
    var number = Math.floor(Math.random() * 7);
    if (number == 1) {
      color = 'Green Yellow';
    }else if (number == 2) {
      color = 'Lawn Green';
    }else if (number == 3) {
      color = 'Lime';
    }else if (number == 4) {
      color = 'Lime Green';
    }else if (number == 5) {
      color = 'Light Green';
    }else {
      color = 'Spring Green';
    }return color;
  }
});
