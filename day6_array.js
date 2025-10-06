// Array basics
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits); // Prints all items
console.log(fruits[0]); // Prints "Apple"
fruits[1] = "Mango"; // Change "Banana" to "Mango"
console.log(fruits); // ["Apple", "Mango", "Cherry"]

fruits.push("Orange"); // Add at the end
console.log(fruits); // ["Apple", "Mango", "Cherry", "Orange"]

console.log("Total fruits:", fruits.length); // Prints 4



// Array methods in action
let colors = ["Red", "Green", "Blue"];

colors.push("Yellow"); // Adds "Yellow" to the end
console.log(colors); // ["Red", "Green", "Blue", "Yellow"]

colors.pop(); // Removes last item ("Yellow")
console.log(colors); // ["Red", "Green", "Blue"]

colors.unshift("Purple"); // Adds "Purple" to the start
console.log(colors); // ["Purple", "Red", "Green", "Blue"]

colors.shift(); // Removes first item ("Purple")
console.log(colors); // ["Red", "Green", "Blue"]

let someColors = colors.slice(1, 3); // Gets items from index 1 to 2
console.log(someColors); // ["Green", "Blue"]

colors.splice(1, 1, "Orange"); // At index 1, remove 1 and add "Orange"
console.log(colors); // ["Red", "Orange", "Blue"]