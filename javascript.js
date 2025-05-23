const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const maxRounds = 5;
let round = 0;
let userPoints = 0;
let computerPoints = 0;
let roundDraws = 0;

const choicesButton = document.querySelectorAll(".choice");
choicesButton.forEach(btn => {
  btn.addEventListener('click',() => playRound(btn.value));
});

const scoreText = document.querySelector("#score");
const choicesText = document.querySelector("#players-choices");
const roundWinnerText = document.querySelector("#round-winner");
const announcementText = document.querySelector("#announcement");

function playRound(playerSelection) {
  console.log(playerSelection);
  const computerChoice = Math.floor(Math.random() * CHOICES.length); 
  const computerSelection = CHOICES[computerChoice];
  let winnerText;

  choicesText.textContent = `You chose ${playerSelection}, and Computer chose ${computerSelection}.`;
  round++;
  // same choice
  if (playerSelection == computerSelection) {
    roundDraws++;
    winnerText = "It's a draw.";
    // Rock vs Paper
  } else if (playerSelection == CHOICES[ROCK] && computerSelection == CHOICES[PAPER]
    // Paper vs Scissors
    || playerSelection == CHOICES[PAPER] && computerSelection == CHOICES[SCISSORS]
    // Scissors vs Rock
    || playerSelection == CHOICES[SCISSORS] && computerSelection == CHOICES[ROCK]) {
    computerPoints++;
    winnerText = "Computer wins.";
    // Other cases where user wins
  } else {
    userPoints++;
    winnerText = "User wins!";
  }

  roundWinnerText.textContent = winnerText;
  updateScore();
}

function updateScore() {
  scoreText.textContent = `User: ${userPoints} --- Computer: ${computerPoints} --- Draw: ${roundDraws}`;

  if (round == maxRounds) {
    declareWinner();
    disableButtons();
  }
}

function declareWinner() {
  let announcementMessage= `After ${maxRounds} rounds: `;
  if (userPoints > computerPoints) announcementMessage += `User wins with ${userPoints} point(s)`;
  else if (computerPoints > userPoints) announcementMessage += `Computer wins with ${computerPoints} point(s)`;
  else announcementMessage += `It ended in a draw with both having ${userPoints} point(s)`;

  announcementText.textContent = announcementMessage;
}

function disableButtons() {
  const buttons = document.getElementsByClassName("choice");
  const totalButtons = buttons.length;

  for (let i=0; i<totalButtons; i++) buttons[i].disabled = true;
}