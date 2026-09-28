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

function getHumanChoice() {
    let humanChoice = prompt("Choose your hand: ");
    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let result;
    
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                result = "Draw!"
            }
            else if (computerChoice === "paper") {
                result = "You lose! Paper beats Rock!"
                computerScore++
            }
            else {
                result = "You Win! Rock beats Scissors!"
                humanScore++
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                result = "You Win! Paper beats Rock!"
                humanScore++
            }
            else if (computerChoice === "paper") {
                result = "Draw!"
            }
            else {
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
            else {
                result = "Draw!"
            }
        }
    
        console.log(result);
        return result;
    }
    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        console.log(humanScore);
        console.log(computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (humanScore === computerScore) {
        console.log("Draw!")
    }
    else {
        console.log("You lose!")
    }
    console.log(`Final score: ${humanScore} - ${computerScore}`)
}

playGame();