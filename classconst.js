// Parent class
class Person {
  // Parent constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Child class with single inheritance
class Student extends Person {
  // Child constructor
  constructor(name, age, grade) {
    // Calling the parent constructor using super()
    super(name, age);
    this.grade = grade;
  }
}

// Get arguments from the command line
const nameArg = process.argv[2] || "Alice";
const ageArg = process.argv[3] || 20;
const gradeArg = process.argv[4] || "A-Grade";

// Creating an object to test the constructors with command line inputs
const student1 = new Student(nameArg, ageArg, gradeArg);

console.log(`Name: ${student1.name}`);   // Output: Name
console.log(`Age: ${student1.age}`);     // Output: Age
console.log(`Grade: ${student1.grade}`); // Output: Grade
