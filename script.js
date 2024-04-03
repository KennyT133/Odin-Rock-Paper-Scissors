var playerChoice;
const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const container = document.querySelector("#container");
let computerScore = 0;
let playerScore = 0;

const result = document.createElement("div");
result.classList.add("result");
 playerSelect = document.createElement("p");
 computerSelect = document.createElement("p");
 playerScoreDisplay = document.createElement("p");
 computerScoreDisplay = document.createElement  ("p");
 playerWon = document.createElement("p");
 computerWon = document.createElement("p");

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random() *3);
    return choices[random];
}



function playRound(playerSelection,computerSelection){
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();
    if(lowerPlayerSelection == lowerComputerSelection){
        playerSelect.textContent = "Player chose: " + lowerPlayerSelection;
        computerSelect.textContent = "Computer chose: " + lowerComputerSelection;
        result.appendChild(playerSelect);
        result.appendChild(computerSelect);
        playerScoreDisplay.textContent = "Player: " + playerScore;
        computerScoreDisplay.textContent = "Computer: " + computerScore;
        result.appendChild(playerScoreDisplay);
        result.appendChild(computerScoreDisplay);
        return("tie");
    }
    else if(lowerPlayerSelection == "rock" && lowerComputerSelection == "scissors"){
        playerSelect.textContent = "Player chose: " + lowerPlayerSelection;
        computerSelect.textContent = "Computer chose: " + lowerComputerSelection;
        result.appendChild(playerSelect);
        result.appendChild(computerSelect);
        playerScore++;
        playerScoreDisplay.textContent = "Player: " + playerScore;
        computerScoreDisplay.textContent = "Computer: " + computerScore;
        result.appendChild(playerScoreDisplay);
        result.appendChild(computerScoreDisplay);
        return("player");
    }
    else if(lowerPlayerSelection == "paper" && lowerComputerSelection == "rock"){
        playerSelect.textContent = "Player chose: " + lowerPlayerSelection;
        computerSelect.textContent = "Computer chose: " + lowerComputerSelection;
        result.appendChild(playerSelect);
        result.appendChild(computerSelect);
        playerScore++;
        playerScoreDisplay.textContent = "Player: " + playerScore;
        computerScoreDisplay.textContent = "Computer: " + computerScore;
        result.appendChild(playerScoreDisplay);
        result.appendChild(computerScoreDisplay);
        return("player");
    }
    else if(lowerPlayerSelection == "scissors" && lowerComputerSelection == "paper"){
        playerSelect.textContent = "Player chose: " + lowerPlayerSelection;
        computerSelect.textContent = "Computer chose: " + lowerComputerSelection;
        result.appendChild(playerSelect);
        result.appendChild(computerSelect);
        playerScore++;
        playerScoreDisplay.textContent = "Player: " + playerScore;
        computerScoreDisplay.textContent = "Computer: " + computerScore;
        result.appendChild(playerScoreDisplay);
        result.appendChild(computerScoreDisplay);
        return("player");
    }
    playerSelect.textContent = "Player: " + lowerPlayerSelection;
    computerSelect.textContent = "Computer chose: " + lowerComputerSelection;
    result.appendChild(playerSelect);
    result.appendChild(computerSelect);
    computerScore++;
    playerScoreDisplay.textContent = "Player: " + playerScore;
    computerScoreDisplay.textContent = "Computer: " + computerScore;
    result.appendChild(playerScoreDisplay);
    result.appendChild(computerScoreDisplay);
    return("computer");
}
    rockButton.addEventListener("click", function(e) {
        playerChoice = "rock";
        playRound(playerChoice,getComputerChoice());
        if(playerScore == 5){
            playerWon.textContent = "Player has won!";
            result.appendChild(playerWon);
        }
        else if(computerScore == 5){
            computerWon.textContent = "Computer has won!";
            result.appendChild(computerWon);
        }
        container.appendChild(result);
    });
    paperButton.addEventListener("click",function(e){
        playerChoice = "paper";
        playRound(playerChoice,getComputerChoice());
        if(playerScore == 5){
            playerWon.textContent = "Player has won!";
            result.appendChild(playerWon);
        }
        else if(computerScore == 5){
            computerWon.textContent = "Computer has won!";
            result.appendChild(computerWon);
        }
        container.appendChild(result);
    });
    scissorButton.addEventListener("click",function(e){
        playerChoice = "scissors";
        playRound(playerChoice,getComputerChoice());
        if(playerScore == 5){
            playerWon.textContent = "Player has won!";
            result.appendChild(playerWon);
        }
        else if(computerScore == 5){
            computerWon.textContent = "Computer has won!";
            result.appendChild(computerWon);
        }
        container.appendChild(result);
    });