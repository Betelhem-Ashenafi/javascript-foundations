// Number Guessing Game
const prompt = require('prompt-sync')();
const secret = Math.floor(Math.random() * 10) + 1;
let guess = null;

console.log("Guess the secret number (1-10):");
while (guess !== secret) {
  guess = Number(prompt("Your guess: "));
  if (guess > secret) {
    console.log("Too high!");
  } else if (guess < secret) {
    console.log("Too low!");
  } else {
    console.log("Correct! You win!");
  }
}explain each line of code
