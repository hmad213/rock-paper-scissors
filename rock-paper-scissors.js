function getComputerChoice(){
    randNum = Math.floor(Math.random() * 3)
    switch(randNum){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function playGame(){
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            div.textContent = `It's a draw. Both chose ${humanChoice}.User Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
        else if(humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++;
            div.textContent = `You lose! ${computerChoice} beats ${humanChoice}. User Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
        else{
            humanScore++;
            div.textContent = `You win! ${humanChoice} beats ${computerChoice}. User Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
    }
    
    let div = document.querySelector("div");
    let computerScore = 0;
    let humanScore = 0;
    let gameEnd = false;
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playRound(e.target.textContent, getComputerChoice());
            if(computerScore >= 5 || humanScore >= 5){
                gameEnd = true;
                if(computerScore >= 5){
                    div.textContent = "Computer wins";
                }
                else{
                    div.textContent = "User wins"
                }
                return;
            }
        })
    })
}

playGame();