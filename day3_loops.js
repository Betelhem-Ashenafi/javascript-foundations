// for loop
for (let i = 1; i <= 5; i++) {
  console.log("for loop number:", i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("while loop count:", count);
  count++;
}

// do...while loop
let num = 0;
do {
  console.log("do...while loop num:", num);
  num++;
} while (num < 2);

// Looping through an array
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}

// Using for...of
for (let color of colors) {
  console.log("for...of color:", color);
}

// Using forEach
colors.forEach(function(color) {
  console.log("forEach color:", color);
});

// break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop at 5
  console.log("Loop control:", i);
}