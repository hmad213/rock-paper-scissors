function getComputerChoice(){
    randNum = Math.floor(Math.random() * 3)
    switch(randNum){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let userInput
    while(true){
        userInput = prompt("Enter rock, paper, or scissors: ");
        userInput = userInput.toLowerCase()
        if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
            return userInput
        }
    }
}

function playGame(){
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("It's a draw. Both chose " + humanChoice);
        }
        else if(humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else{
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    console.log(`Your score is ${humanScore}`);
    console.log(`The computer's score is ${computerScore}`);
}

playGame();