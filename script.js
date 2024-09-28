const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceDisplay.textContent = `You chose: ${capitalize(userChoice)}`;
    computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computerChoice)}`;
    resultMessage.textContent = `Result: ${result}`;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
