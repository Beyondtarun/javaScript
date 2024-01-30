let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let option = ["rock", "paper", "scissor"];
  let val = Math.floor(Math.random() * 3); //random number generation
  return option[val];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
  userChoice = userChoice.toUpperCase();
  compChoice = compChoice.toUpperCase();
  if (userWin) {
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Loose! ${compChoice} beats ${userChoice}`;
  }
};

const decideWinner = (userChoice, compChoice) => {
  let userWin = true;
  if (userChoice === "rock") {
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    userWin = compChoice === "rock" ? true : false;
  } else {
    userWin = compChoice === "rock" ? false : true;
  }
  showWinner(userWin, userChoice, compChoice);
};

const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  

  if (userChoice === compChoice) {
    drawGame();
  } else {
    decideWinner(userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
