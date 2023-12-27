function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
  }

function getComputerChoice() {
    let guess = getRandomInt(2);
    if (guess === 0) {
        return 'rock';
    }
    if (guess === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            return 'TIE'
        }
        if (computerSelection == 'paper') {
            return 'LOSE'
        }
        if (computerSelection == 'scissors') {
            return 'WIN'
        }
    }
    if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'rock') {
            return 'WIN'
        }
        if (computerSelection == 'paper') {
            return 'TIE'
        }
        if (computerSelection == 'scissors') {
            return 'LOSE'
        }
    }
    if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock') {
            return 'LOSE'
        }
        if (computerSelection == 'paper') {
            return 'WIN'
        }
        if (computerSelection == 'scissors') {
            return 'TIE'
        }
    }


}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 || computerScore < 5) {
        const playerSelection = prompt('Your choice: ');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == 'LOSE') {
            computerScore++
        } else if (result == 'WIN') {
            playerScore++
        }
    }

    const winner = (playerScore > computerScore) ? "player" : "computer"
    return winner
}


console.log(game())