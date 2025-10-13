let numbers = [1, 2, 3, 4];

// Double each number
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
let ages = [12, 17, 19, 21, 14];

// Get only ages 18 and above
let adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // [19, 21]
let nums = [5, 10, 15];

// Add up all numbers
let total = nums.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log(total); // 30
let students = [
  { name: "Betelhem", age: 21 },
  { name: "Abel", age: 19 },
  { name: "Sara", age: 22 }
];

// Get just the names
let names = students.map(function(student) {
  return student.name;
});
console.log(names); // ["Betelhem", "Abel", "Sara"]

// Find students older than 20
let olderStudents = students.filter(function(student) {
  return student.age > 20;
});
console.log(olderStudents);
// [{ name: "Betelhem", age: 21 }, { name: "Sara", age: 22 }]

// Get the total age
let totalAge = students.reduce(function(acc, student) {
  return acc + student.age;
}, 0);
console.log(totalAge); // 62