// Arithmetic Operators
let a = 10;
let b = 4;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Assignment Operators
let x = 5;
x += 3; // x = x + 3
console.log("x after += 3:", x);
x *= 2; // x = x * 2
console.log("x after *= 2:", x);

// Comparison and Logical Operators
let age = 17;
let isStudent = true;
console.log("Is adult?", age >= 18); // false
console.log("Is minor and student?", age < 18 && isStudent); // true

// Conditional Statements
let score = 77;
if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("Needs improvement");
}

// Switch Statement
let color = "blue";
switch (color) {
  case "red":
    console.log("Color is red.");
    break;
  case "blue":
    console.log("Color is blue.");
    break;
  default:
    console.log("Color is unknown.");
    break;
}