let students=[
    {name: "fiya",age: 21},
    {name: "abel", age: 19},
    {name: "boni", age: 29}];
let firstOlderStudent = students.find(function(student){
    return student.age > 20;

});
console.log(firstOlderStudent); // {name: "fiya", age: 21}  

// Does the list include any student younger than 18?
let hasMinor = students.some(function(student) {
  return student.age < 18;
});
console.log(hasMinor); // false


// Are all students older than 18?
let allAdults = students.every(function(student) {
  return student.age > 18;
});
console.log(allAdults); // true



