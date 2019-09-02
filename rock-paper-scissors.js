const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
  	console.log('error');
    }
  };

//console.log(getUserChoice('ROCK'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
      }
  return randomNumber
};

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'You bombed your opponent! You win!';
  }
  
  
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } 
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper') {
      return 'Computer won!';
    } else return 'User won!';
  }
   
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors') {
      return 'Computer won!';
    } else return 'User won!';
  }
  
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock') {
      return 'Computer won!';
    } else return 'User won!';
  }
};

const playGame = () => {
  const userChoice = 
        getUserChoice('bomb');
  const computerChoice = 
        getComputerChoice();
  console.log('Your Choice is: ' + userChoice);
  console.log('The computer choice is: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();
