const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

let userChoice = prompt("Rock, paper, or scissors?");

if (userChoice == undefined || userChoice == "") {
  console.log("Invalid input.");
} else {
  userChoice = userChoice.toUpperCase().trim();

  if (userChoice == CHOICES[0]
    || userChoice == CHOICES[1]
    || userChoice == CHOICES[2]) {
    
  } else {
    console.log("Not in the choices.");
  }
}