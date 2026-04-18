class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the Animal constructor
    this.breed = breed;
  }
}

// Creating an object
let myDog = new Dog("Buddy", "Pug");

console.log(myDog.name);  // Output: Buddy
console.log(myDog.breed); // Output: Pug
