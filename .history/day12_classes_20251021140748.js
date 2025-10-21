class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Create an object (instance) from the class
let student1 = new Student("Betelhem", 21);
student1.greet(); // Output: Hello, my name is Betelhem.


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5);
console.log(rect.area()); // Output: 20



