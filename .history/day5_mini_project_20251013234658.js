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
}



// Simple CLI To-Do List App


let todos = [];
let running = true;

console.log("Welcome to the To-Do List App!");

while (running) {
  console.log("\nMenu:");
  console.log("1. Add task");
  console.log("2. View tasks");
  console.log("3. Remove task");
  console.log("4. Exit");

  const choice = prompt("Choose an option (1-4): ");

  if (choice === "1") {
    const task = prompt("Enter your task: ");
    todos.push(task);
    console.log("Task added!");
  } else if (choice === "2") {
    if (todos.length === 0) {
      console.log("No tasks yet!");
    } else {
      console.log("Your tasks:");
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
      }
    }
  } else if (choice === "3") {
    const removeIndex = Number(prompt("Enter task number to remove: ")) - 1;
    if (removeIndex >= 0 && removeIndex < todos.length) {
      todos.splice(removeIndex, 1);
      console.log("Task removed!");
    } else {
      console.log("Invalid task number!");
    }
  } else if (choice === "4") {
    running = false;
    console.log("Goodbye!");
  } else {
    console.log("Invalid option! Please choose 1-4.");
  }
}
