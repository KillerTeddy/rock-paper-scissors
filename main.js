function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        return "Rock"
    }
    else if (randomNumber == 1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie"
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        computerScore += 1
        return "You lose! Paper beats rock!"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        computerScore += 1
        return "You lose! Scissors beats Paper!"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        computerScore += 1
        return "You lose! Rock beats Scissors!"
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        playerScore += 1
        return "You win! Rock beats scissors!"
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        playerScore += 1
        return "You win! Scissors beats Paper!"
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        playerScore += 1
        return "You win! Paper beats Rock!"
    }
    return "Something strange has happened..."
  }



  const buttons = document.querySelectorAll(".btn")
  const results = document.querySelector(".results")
  buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        const playerSelection = element.textContent
        const computerSelection = getComputerChoice();
        results.textContent = (playRound(playerSelection, computerSelection) + ` You: ${playerScore}, Computer: ${computerScore}`)
        console.log(`You: ${playerScore}, Computer: ${computerScore}` )
        if (playerScore == 5){
            results.textContent = "You win!"
        }
        if (computerScore == 5){
            results.textContent = "You lose!"
        }
    })
    
  });

 



  let playerScore = 0
  let computerScore = 0
 // game()
