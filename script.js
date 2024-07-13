console.log("hello you");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  const getChoices = prompt(`${choices.join("")}`);
  if (!choices.includes(getChoices.toLowerCase())) {
    alert(
      "that is not a choice, please choose either rock, paper, or scissors."
    );
    return getHumanChoice;
  }
  return getChoices.toLowerCase();
}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  if (computerChoice === humanChoice) {
    alert("It's a tie!");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    alert(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else {
    alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
}
playRound();

function playGame() {
  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    playRound();
  }
}
playGame();
