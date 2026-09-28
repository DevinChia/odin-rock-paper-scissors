let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;

    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice(humanChoice) {
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = "Draw!"
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result = "You lose! Paper beats Rock!"
            computerScore++
        }
        else if (computerChoice === "scissors") {
            result = "You Win! Rock beats Scissors!"
            humanScore++
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result = "You Win! Paper beats Rock!"
            humanScore++
        }
        else if (computerChoice === "scissors") {
            result = "You lose! Scissors beats Paper!"
            computerScore++
        }
    }
    else {
        if (computerChoice === "rock") {
            result = "You lose! Rock beats Scissors!"
            computerScore++
        }
        else if (computerChoice === "paper") {
            result = "You win! Scissors beats Paper!"
            humanScore++
        }
    }

    return result;
}

const body = document.querySelector("body");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

const humanChoice = document.createElement("div");
const computerChoice = document.createElement("div");
const resultContainer = document.createElement("div");

const scoreBoard = document.createElement("div")
const winnerContainer = document.createElement("div")

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

body.appendChild(rockButton)
body.appendChild(paperButton)
body.appendChild(scissorsButton)

body.appendChild(humanChoice)
body.appendChild(computerChoice)
body.appendChild(resultContainer)

body.appendChild(scoreBoard)
body.appendChild(winnerContainer)

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (humanScore === 5 || computerScore === 5) {
            return;
        }
        const humanSelection = getHumanChoice(btn.textContent);
        const computerSelection = getComputerChoice();
        humanChoice.textContent = "Player's choice: " + humanSelection;
        computerChoice.textContent = "Computer's choice: " + computerSelection;
        resultContainer.textContent = playRound(humanSelection, computerSelection);
        scoreBoard.textContent = `${humanScore} - ${computerScore}`;
        if (humanScore === 5) {
            winnerContainer.textContent = "Player wins!"
        }
        else if (computerScore === 5) {
            winnerContainer.textContent = "Computer wins!"
        }
    });
});