let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3            

let student = {name: "Abel", age: 19};
let {name, age} = student;
console.log(name); // "Abel"
console.log(age); // 19 


let person = {name: "Sara", age: 22, city: "Addis Ababa"};
let {name: personName, age: personAge} = person;
console.log(personName); // "Sara"
console.log(personAge); // 22   