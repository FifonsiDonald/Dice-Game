//random number(1-6) generator

let randomNumber1 = generator();
function generator() {
  let num = Math.floor(Math.random() * 6) + 1;
  return num;
}

let randomNumber2 = generator();
function generator() {
  let num = Math.floor(Math.random() * 6) + 1;
  return num;
}

//getting random values for the dices

function thedice() {
  const one = "images/dice1.png";
  const two = "images/dice2.png";
  const three = "images/dice3.png";
  const four = "images/dice4.png";
  const five = "images/dice5.png";
  const six = "images/dice6.png";
  if (randomNumber1 == 1) {
    return one;
  } else if (randomNumber1 == 2) {
    return two;
  } else if (randomNumber1 == 3) {
    return three;
  } else if (randomNumber1 == 4) {
    return four;
  } else if (randomNumber1 == 5) {
    return five;
  } else if (randomNumber1 == 6) {
    return six;
  }
}

function theSecondDice() {
  const one = "images/dice1.png";
  const two = "images/dice2.png";
  const three = "images/dice3.png";
  const four = "images/dice4.png";
  const five = "images/dice5.png";
  const six = "images/dice6.png";
  if (randomNumber2 == 1) {
    return one;
  } else if (randomNumber2 == 2) {
    return two;
  } else if (randomNumber2 == 3) {
    return three;
  } else if (randomNumber2 == 4) {
    return four;
  } else if (randomNumber2 == 5) {
    return five;
  } else if (randomNumber2 == 6) {
    return six;
  }
}

document.querySelector(".img1").setAttribute("src", thedice());
document.querySelector(".img2").setAttribute("src", theSecondDice());

//setting the winner  

if (randomNumber1 == randomNumber2) {
  document.querySelector("#title").textContent = "🏳️It's a draw🏳️";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("#title").textContent = "🚩player 1  wins";
} else if (randomNumber1 < randomNumber2) {         
  document.querySelector("#title").textContent = "player 2 wins🚩";
}
