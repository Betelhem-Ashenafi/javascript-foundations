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



class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Rex");
d.speak(); // Output: Rex barks.



class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(3, 5)); // Output: 8