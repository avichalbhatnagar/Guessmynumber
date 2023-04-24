"use strict";
let Secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === Secretnumber) {
    displayNumber(Secretnumber);
    displayMessage(" Correct Answer!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      displayMessage(guess > Secretnumber ? " To High!" : " To Low!");

      score--;
      displayScore(score);
    } else {
      displayMessage(" You Lost the Game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
