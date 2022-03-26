function randomComputerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    randomChoice = Math.floor(Math.random() * choices.length);
    computerSelection = choices[randomChoice];
    console.log(`Computer chose ${computerSelection}`);
    return computerSelection;
}

// function randomPlayerPlay() {
//     let choices = ['rock', 'paper', 'scissors'];
//     randomChoice = Math.floor(Math.random() * choices.length);
//     playerSelection = choices[randomChoice];
//     console.log(`you chose ${playerSelection}`);
//     return playerSelection;
// }

// function playerPlay(){
//     let playerSelection = prompt('Choose Rock, Paper, or Scissors');
//     console.log(playerSelection);
//     return playerSelection;
// }


// function makeChoices() {
//     randomComputerPlay();
//     }

function playRound() {
    let playerSelection = prompt('Choose Rock, Paper, or Scissors');
    console.log(`You chose ${playerSelection}`)
    randomComputerPlay();
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'scissors') {
                return win()
            } else if(computerSelection == 'paper') {
                return loss()
            } else if(computerSelection == 'rock') {
                console.log('Draw!')
            };
            break;
        case 'paper':
                if(computerSelection == 'rock') {
                    return win()
                } else if(computerSelection == 'scissors') {
                    return loss()
                } else if(computerSelection == 'paper') {
                    console.log('Draw!')
                };
                break;
        case 'scissors':
            if(computerSelection == 'paper') {
                return win()
            } else if(computerSelection == 'rock') {
                return loss()
            } else if(computerSelection == 'scissors') {
                console.log('Draw!')
            };
            break;
        default:
            console.log('Not a valid choice!')
            return loss()
    }
}

function win() {
    console.log('You win this round!');
    playerScore++
}

function loss() {
    console.log('You lost this round!');
    return computerScore++
}

function roundResult() {
    console.log(`You: ${playerScore} Computer: ${computerScore}`)
}
// let round = 1;

function game() {
    // console.log(`Round: ${round}`)
    // playRound();
    // roundResult();
    for(let round = 1; round < 6; round++) {
        console.log(`Round: ${round}`)
        playRound();
        roundResult();
    }
    if(playerScore > computerScore) {
        console.log('You won the game!')
        restartGame()
    } else if(playerScore < computerScore) {
        console.log('You lost the game!')
        restartGame()
    } else if(playerScore == computerScore) {
        console.log('You tied the game!')
        restartGame()        
    }

}

function restartGame() {
    let playAgain = prompt('Play again?')
    if(playAgain.toLowerCase() == 'yes') {
        newGame()
    }
}


function newGame() {
    game()
}


let playerScore = 0;

let computerScore = 0;

newGame()

// game()

// document.getElementById("play").addEventListener("click", game)


// while(playerScore || computerScore < 5){
//     document.getElementById("play").addEventListener("click", game);
// }
// for(let computerScore = 0; computerScore < 5; computerScore++){
//     console.log('computer Score: ', computerScore)
//     if(computerScore < 5) {
//         playRound()
//     }
// }