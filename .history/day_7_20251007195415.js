// Create an object
let person = {
  name: "Betelhem",
  age: 21,
  isStudent: true
};

// Access properties
console.log(person.name);      // "Betelhem"
console.log(person["age"]);    // 21

// Update property
person.age = 22;
console.log(person.age);       // 22

// Add new property
person.country = "Ethiopia";
console.log(person.country);   // "Ethiopia"

// Loop through properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Array of objects
let students = [
  { name: "Betelhem", age: 21, isStudent: true },
  { name: "Abel", age: 19, isStudent: true },
  { name: "Sara", age: 22, isStudent: false }
];

// Loop through array and print names
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Find all student names who are students
for (let i = 0; i < students.length; i++) {
  if (students[i].isStudent) {
    console.log(students[i].name + " is a student.");
  }
}
// Array of objects
let students = [
  { name: "Betelhem", age: 21, isStudent: true },
  { name: "Abel", age: 19, isStudent: true },
  { name: "Sara", age: 22, isStudent: false }
];

// Function to find a student by name
function findStudentByName(students, searchName) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === searchName) {
      return students[i];
    }
  }
  return null;
}

let student = findStudentByName(students, "Abel");
console.log(student); // { name: "Abel", age: 19, isStudent: true }