const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const resetButton = document.querySelector('.resetButton');
const lowOrHi = document.querySelector('.lowOrHi');
const lastResult = document.querySelector('.lastResult');
const prevGuessElement=document.querySelector('.guesses');

let randomNumber = Math.floor(Math.random() * 100) + 1; // use Math.floor to round down the decimal but we can use parseInt also
let guessesRemaining = 10;

// const userGuessesArray=[]; // user array is not used in the code but i have kept it if needed later

guessSubmit.addEventListener('click', function(event) { // submit event is not working here so used click event
  event.preventDefault();
  const userGuess = Number(guessField.value);
  guessField.value = '';
  if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
    alert("please Enter a valid number between 1 and 100");
    return;
  }
  if(guessesRemaining===0){
    lowOrHi.innerHTML="Sorry, You have already lost please start a new game to replay!!!\n              (click button below)"; // instead of giving whitespaces like that i could have appended childs of specific classes and apply css in file on them
    return;
  }
//   userGuessesArray.push(userGuess);
  guessesRemaining--;
  lastResult.textContent = guessesRemaining;
  prevGuessElement.appendChild(document.createTextNode(userGuess + ' '));
    if (userGuess === randomNumber) {
      lowOrHi.textContent = `Congratulations! You got it right! 🎉 on guess number ${10 - guessesRemaining}`;
    } else if (guessesRemaining === 0) {
      lowOrHi.textContent = `Game over! The number was ${randomNumber}`;
    } else {
      lowOrHi.textContent = userGuess < randomNumber ? "Last guess was low!" : "Last guess was high!";
    }

});

resetButton.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessesRemaining = 10;
//   userGuessesArray.length = 0; // clear previous guesses
  lastResult.textContent = guessesRemaining;
  prevGuessElement.textContent = ''; // clear guesses display
  lowOrHi.textContent = '';
  guessField.value = '';
  return;
});