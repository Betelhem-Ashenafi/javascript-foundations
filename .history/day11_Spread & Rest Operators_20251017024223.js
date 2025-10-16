let numbers = [1, 2, 3];
let copy = [...numbers];
console.log(copy); // [1, 2, 3]


let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

let person = { name: "Sara", age: 22 };
let personCopy = { ...person };
console.log(personCopy); // { name: "Sara", age: 22 }


