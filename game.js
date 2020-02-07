const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'You need to choose between: rock, paper or scissors.';
  }
};

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lose.';
    } else {
      return 'You win!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lose.';
    } else {
      return 'You win!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lose.';
    } else {
      return 'You win!';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`Your choice is: ${userChoice}`);
  console.log(`Computer's choice is: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
