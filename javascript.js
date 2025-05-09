const choicesButton = document.querySelectorAll(".btnChoice");
choicesButton.forEach(btn => {
  btn.onclick = playRound(btn.textContent.toUpperCase());
})

const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let round = 0;
let userPoints = 0;
let computerPoints = 0;

function playRound(playerSelection) {
  console.log(playerSelection);
  const computerChoice = Math.floor(Math.random() * CHOICES.length); 
  const computerSelection = CHOICES[computerChoice];

  let roundResult = `User chose ${playerSelection} and computer chose ${computerSelection}. `;
  round++;
  
  // same choice
  if (playerSelection == computerSelection) {
    roundResult += "\nIt's a draw.";
    // Rock vs Paper
  } else if (playerSelection == CHOICES[ROCK] && computerSelection == CHOICES[PAPER]
    // Paper vs Scissors
    || playerSelection == CHOICES[PAPER] && computerSelection == CHOICES[SCISSORS]
    // Scissors vs Rock
    || playerSelection == CHOICES[SCISSORS] && computerSelection == CHOICES[ROCK]) {
    roundResult += `\n${computerSelection} beats ${playerSelection}. `;
    roundResult += "\nComputer wins.";
    computerPoints++;
    // Other case where user wins
  } else {
    roundResult += `\n${playerSelection} beats ${computerSelection}. `;
    roundResult += "\nUser wins.";
    userPoints++;
  }
  return roundResult;
}

let finalResult = `Game ended with a total of ${round} round(s).
User with ${userPoints} point(s).
Computer with ${computerPoints} point(s).
${round-computerPoints-userPoints} draw(s).`;

console.log(finalResult);