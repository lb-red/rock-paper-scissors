const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

let userChoice = prompt("Rock, paper, or scissors?");
let computerChoice = getComputerChoice();

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // Generate number from 0 up to 2
  return CHOICES[random];
}

function playRound(playerSelection, computerSelection) {
  let result = `User chose ${playerSelection} and computer chose ${computerSelection}. `;
  
  // same choice
  if (playerSelection == computerSelection) {
    result += "It's a draw.";
    // Rock vs Paper
  } else if (playerSelection == CHOICES[0] && computerSelection == CHOICES[1]
    // Paper vs Scissors
    || playerSelection == CHOICES[1] && computerSelection == CHOICES[2]
    // Scissors vs Rock
    || playerSelection == CHOICES[2] && computerSelection == CHOICES[0]) {
    result += "Computer wins.";
    // Other case where user wins
  } else {
    result += "User wins.";
  }
  return result;
}

// Ensures user input is one of the choices. Case insensitive
if (userChoice == undefined || userChoice == "") {
  console.log("Invalid input.");
} else {
  userChoice = userChoice.toUpperCase().trim();

  if (userChoice == CHOICES[0]
    || userChoice == CHOICES[1]
    || userChoice == CHOICES[2]) {
    result = playRound(userChoice, computerChoice);
    console.log(result);
    alert(result);
  } else {
    console.log("Not in the choices.");
  }
}