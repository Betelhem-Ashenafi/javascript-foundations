// Function Declaration
function sayHello() {
  console.log("Hello!");
}
sayHello();

// Function with Parameters and Return
function square(num) {
  return num * num;
}
console.log("Square of 5:", square(5));

// Function Expression
const isEven = function(n) {
  return n % 2 === 0;
};
console.log("Is 10 even?", isEven(10));

// Arrow Function
const greetPerson = name => console.log("Hi, " + name + "!");
greetPerson("Betelhem");

// Arrow Function with Return
const add = (a, b) => a + b;
console.log("Sum:", add(7, 8));
