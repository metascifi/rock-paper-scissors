let humanScore = 0; 
let computerScore = 0;
let targetID = "";
let playedNum = 0;


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


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultInfo = document.querySelector("#result");

document.addEventListener("click", (event) => {
        let target = event.target;
        targetID = target.id;

        switch(targetID){
            case "rock": 
                playRound(); 
                break;
            case "paper": 
                playRound(); 
                break;
            case "scissors": 
                playRound(); 
                break;
        }

        ++playedNum;
        resultInfo.style.color = "#00ffe5";
        if (playedNum === 5){
            if (humanScore === computerScore) {
                resultInfo.textContent = "It's a draw!";
                resultInfo.style.color = "white";
            } else if (humanScore > computerScore) {
                resultInfo.textContent = `You won with score ${humanScore} - ${computerScore}!`;
                resultInfo.style.color = "green";
            } else {
                resultInfo.textContent = `You lost with score ${humanScore} - ${computerScore}!`;
                resultInfo.style.color = "red";
            };
            humanScore = 0;
            computerScore = 0;
            playedNum = 0;

        };
    });


    function playRound(computerChoice = getComputerChoice().toLowerCase()) {
        
        switch (targetID) {
    
            case computerChoice:
                resultInfo.textContent = 'A tie!';
                ++computerScore;
                ++humanScore;
                break;
    
            case "rock":
                if (computerChoice === "scissors"){
                    resultInfo.textContent = "You win! Rock beats Scissors!";
                    ++humanScore;
                } else {
                    resultInfo.textContent = "You lose! Paper beats Rock!";
                    ++computerScore;
                };
                break;
    
            case "paper": 
                if (computerChoice === "rock"){
                    resultInfo.textContent = "You win! Paper beats Rock!";
                    ++humanScore;
                } else {
                    resultInfo.textContent = "You lose! Scissors beats Paper!";
                    ++computerScore;
                };
                break;
            
            case "scissors" : 
                if (computerChoice === "paper") {
                    resultInfo.textContent = "You win! Scissors beats Paper!"; 
                    ++humanScore;
                } else {
                    resultInfo.textContent = "You lose! Rock beats Scissors!"; 
                    ++computerScore;
                };
                break;
        }
    };







