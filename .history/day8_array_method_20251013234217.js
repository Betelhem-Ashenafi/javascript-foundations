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