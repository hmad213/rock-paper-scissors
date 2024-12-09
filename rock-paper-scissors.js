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
    userInput = prompt("Enter rock, paper, or scissors: ");
    while(true){
        userInput = userInput.toLowerCase()
        if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
            return userInput
        }
        userInput = prompt("Invalid input! Enter rock, paper, or scissors: ");
    }
}

function playGame(){
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            alert("It's a draw. Both chose " + humanChoice);
        }
        else if(humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else{
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
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
    alert(`Your score is ${humanScore}`);
    alert(`The computer's score is ${computerScore}`);
}

playGame();