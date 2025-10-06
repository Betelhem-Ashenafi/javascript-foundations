// Array basics
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits); // Prints all items
console.log(fruits[0]); // Prints "Apple"
fruits[1] = "Mango"; // Change "Banana" to "Mango"
console.log(fruits); // ["Apple", "Mango", "Cherry"]

fruits.push("Orange"); // Add at the end
console.log(fruits); // ["Apple", "Mango", "Cherry", "Orange"]

console.log("Total fruits:", fruits.length); // Prints 4