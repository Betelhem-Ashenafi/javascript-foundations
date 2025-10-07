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
