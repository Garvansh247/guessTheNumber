const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const resetButton = document.querySelector('.resetButton');
const lowOrHi = document.querySelector('.lowOrHi');
const lastResult = document.querySelector('.lastResult');
const prevGuessElement=document.querySelector('.guesses');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesRemaining = 10;

const userGuessesArray=[];

guessSubmit.addEventListener('submit', function(event) {
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
  userGuessesArray.push(userGuess);
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
  return;
});