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


