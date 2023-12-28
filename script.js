playerScore = document.querySelector('.counts .player')
computerScore = document.querySelector('.counts .computer')
choices = document.querySelector('.choices').children
choices[0].addEventListener('click', (e) => {
    let result = playRound('rock', getComputerChoice())
    console.log(result);
    justify(result);
});
choices[1].addEventListener('click', (e) => {
    let result = playRound('paper', getComputerChoice())
    console.log(result)
    justify(result);
});
choices[2].addEventListener('click', (e) => {
    let result = playRound('scissors', getComputerChoice())
    console.log(result)
    justify(result);
});



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

function justify(result) {
    player = parseInt(playerScore.innerText, 10)
    computer = parseInt(computerScore.innerText, 10)
    console.log(player)

    if (result == 'WIN') {
        player += 1;
        playerScore.innerText = player
    } else if (result == 'LOSE') {
        computer += 1;
        computerScore.innerText = computer
    }

    if (player == 5) {
        alert('You won!');
        playerScore.innerText = 0;
        computerScore.innerText = 0;
    } else if (computer == 5) {
        alert('You lose!');
        playerScore.innerText = 0;
        computerScore.innerText = 0;
    }
}