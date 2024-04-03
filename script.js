var playerChoice;
const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random() *3);
    return choices[random];
}


function getPlayerChoice(){
    playerChoice = prompt("Please enter: Rock, Paper, Scissors");
    return playerChoice;
}
function playRound(playerSelection,computerSelection){
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();
    if(lowerPlayerSelection == lowerComputerSelection){
        console.log(lowerPlayerSelection);
        console.log(lowerComputerSelection);
        return("tie");
    }
    else if(lowerPlayerSelection == "rock" && lowerComputerSelection == "scissors"){
        console.log(lowerPlayerSelection);
        console.log(lowerComputerSelection);
        return("player");
    }
    else if(lowerPlayerSelection == "paper" && lowerComputerSelection == "rock"){
        console.log(lowerPlayerSelection);
        console.log(lowerComputerSelection);
        return("player");
    }
    else if(lowerPlayerSelection == "scissors" && lowerComputerSelection == "paper"){
        console.log(lowerPlayerSelection);
        console.log(lowerComputerSelection);
        return("player");
    }
    console.log(lowerPlayerSelection);
    console.log(lowerComputerSelection);
    return("computer");
    
}

    rockButton.addEventListener("click", function(e) {
        playerChoice = "rock";
        playRound(playerChoice,getComputerChoice());
    });
    paperButton.addEventListener("click",function(e){
        playerChoice = "paper";
        playRound(playerChoice,getComputerChoice());
    });
    scissorButton.addEventListener("click",function(e){
        playerChoice = "scissors";
        playRound(playerChoice,getComputerChoice());
    });
function playGame(){
    let computerScore = 0;
    let playerScore = 0;
    /*
    for(let i = 0; i < 5; i++){
        let result = playRound(getPlayerChoice(),getComputerChoice());
        if(result == "tie"){
            console.log("It was a tie");
            console.log ("Computer score is: ", computerScore);
            console.log("Player score is: ",playerScore);
        }
        if(result == "player"){
            console.log("Player won!");
            playerScore++;
            console.log ("Computer score is: ", computerScore);
            console.log("Player score is: ",playerScore);
        }
        if(result == "computer"){
            console.log("Computer won!");
            computerScore++;
            console.log ("Computer score is: ", computerScore);
            console.log("Player score is: ",playerScore);
        }
    }
    */
}
playGame();