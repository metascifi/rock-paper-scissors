function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors"
    };
}

function getHumanChoice() {
   return prompt("What will you throw in? Pick your choice below!\n - Rock\n - Paper\n - Scissors")
}


function playGame() {

    let humanScore = 0; 
    let computerScore = 0;

    function playRound(humanChoice = getHumanChoice().toLowerCase(), computerChoice = getComputerChoice().toLowerCase()) {
        switch (humanChoice) {
    
            case computerChoice:
                console.log('A tie!');
                ++computerScore;
                ++humanScore;
                break;
    
            case "rock":
                if (computerChoice === "scissors"){
                    console.log("You win! Rock beats Scissors!")
                    ++humanScore;
                } else {
                    console.log("You lose! Paper beats Rock!")
                    ++computerScore;
                };
                break;
    
            case "paper": 
                if (computerChoice === "rock"){
                    console.log("You win! Paper beats Rock!")
                    ++humanScore;
                } else {
                    console.log("You lose! Scissors beats Paper!")
                    ++computerScore;
                };
                break;
            
            case "scissors" : 
                if (computerChoice === "paper") {
                    console.log("You win! Scissors beats Paper!")
                    ++humanScore;
                } else {
                    console.log("You lose! Rock beats Scissors!")
                    ++computerScore;
                };
                break;
        }
    };

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();


    if (humanScore === computerScore) {
        console.log("It's a draw!")
    } else if (humanScore > computerScore) {
        console.log(`You won with score ${humanScore} - ${computerScore}!`)
    } else {
        console.log(`You lost with score ${humanScore} - ${computerScore}!`)
    }
};




