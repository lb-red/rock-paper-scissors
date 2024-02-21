const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

let userChoice;
let computerChoice;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // Generate number from 0 up to 2
  return CHOICES[random];
}

function playRound(playerSelection, computerSelection) {
  let roundResult = `User chose ${playerSelection} and computer chose ${computerSelection}. `;
  
  // same choice
  if (playerSelection == computerSelection) {
    roundResult += "\nIt's a draw.";
    // Rock vs Paper
  } else if (playerSelection == CHOICES[0] && computerSelection == CHOICES[1]
    // Paper vs Scissors
    || playerSelection == CHOICES[1] && computerSelection == CHOICES[2]
    // Scissors vs Rock
    || playerSelection == CHOICES[2] && computerSelection == CHOICES[0]) {
    roundResult += `\n${computerSelection} beats ${playerSelection}. `;
    roundResult += "\nComputer wins.";
    // Other case where user wins
  } else {
    roundResult += `\n${playerSelection} beats ${computerSelection}. `;
    roundResult += "\nUser wins.";
  }
  return roundResult;
}

function isInputValid(input) {
  // Ensures user input is one of the choices. Case insensitive
  if (input == undefined || input == "") {
    return false;
  } else {
    input = input.toUpperCase().trim();
  
    if (input == CHOICES[0]
      || input == CHOICES[1]
      || input == CHOICES[2]) {
      return true;
    } else {
      return false;
    }
  }
}

function playGame() {
  userChoice = prompt("Rock, paper, or scissors?");
  computerChoice = getComputerChoice();

  if (isInputValid(userChoice)) {
    userChoice = userChoice.toUpperCase().trim();
    let result = playRound(userChoice, computerChoice);
    console.log(result);
    alert(result);
  } else {
    console.log("Not in the choices.");
    alert("Not in the choices.");
  }
}

playGame();
let stillPlaying = true;

while(stillPlaying) {
  confirm("Play another game?") ? playGame() : stillPlaying = false;
}

console.log("Game ended.")