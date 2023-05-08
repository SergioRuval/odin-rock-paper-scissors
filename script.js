const buttons = document.querySelectorAll("#playerControlls>button");
const playerScore = document.querySelector("#playerScore>p");
const pcScore = document.querySelector("#pcScore>p");

let playerVictories = 0;
let pcVictories = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});

playerScore.textContent = playerVictories;
pcScore.textContent = pcVictories;

function getComputerChoice(){
    let choice;
    let number = Math.floor(Math.random() * 3);

    switch(number){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }

    console.log("Computer's choice: " + choice);
    return choice;
}

function getPlayerChoice(playerChoice){
    let choice = playerChoice.toLowerCase();

    if(!validateInput(choice)){
        alert("Invalid input, please try again");
        return "";
    }

    console.log("You choose: " + choice);
    return choice;
}

function validateInput(playerInput){
    if(typeof(playerInput) == "string"){
        playerInput = playerInput.toLowerCase();
        switch (playerInput) {
            case "rock":
                return true;
            case "paper":
                return true;
            case "scissors":
                return true;
            default:
                return false;
        }
    }else{
        return false
    }
}

function rockPaperScissorsRound(playerChoice, computerChoice){
    let victory;
    if(playerChoice == computerChoice){
         return -1;
    }else if(computerChoice == "rock"){
        if(playerChoice == "paper"){
            victory = true;
        }
        if(playerChoice == "scissors"){
            victory = false;
        }
    }else if(computerChoice == "paper"){
        if(playerChoice == "scissors"){
            victory = true;
        }
        if(playerChoice == "rock"){
            victory = false;
        }
    }else if(computerChoice == "scissors"){
        if(playerChoice == "rock"){
            victory = true;
        }
        if(playerChoice == "paper"){
            victory = false;
        }
    }

    return victory;
}

function playRound(e){
    let playerChoice = getPlayerChoice(e.target.textContent);
    let computerChoice = getComputerChoice();
    let victory = rockPaperScissorsRound(playerChoice, computerChoice);
    if(victory == 1){
        playerVictories++;
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    }else if(victory == 0){
        pcVictories++;
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
    }else{
        console.log("Its a tie! You both choose " + playerChoice);
    }
    
    playerScore.textContent = playerVictories;
    pcScore.textContent = pcVictories;
}

function game(e) {
    let playerVictories = 0;
    let pcVictories = 0;

    //for (let index = 0; index < 5; index++) {
        let playerChoice = getPlayerChoice(e.target.textContent);
        let computerChoice = getComputerChoice();
        let victory = rockPaperScissorsRound(playerChoice, computerChoice);
        console.log(victory);
        if(victory == 1){
            playerVictories++;
            console.log("You win! " + playerChoice + " beats " + computerChoice);
        }else if(victory == 0){
            pcVictories++;
            console.log("You lose! " + computerChoice + " beats " + playerChoice);
        }else{
            console.log("Its a tie! You both choose " + playerChoice);
        }
    //}
    console.log("The overall winner is " + (playerVictories > pcVictories ? ("you with " + playerVictories + " victories!") : ("the computer with " + pcVictories + " victories!")));
    
}

//game();