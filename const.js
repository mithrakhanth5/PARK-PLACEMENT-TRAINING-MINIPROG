// In JavaScript, direct multiple inheritance (e.g., class X extends Y, Z) is not supported.
// Instead, we use "Mixins" to achieve multiple inheritance.

// 1. First "Parent" Mixin
const WalkMixin = (BaseClass) => class extends BaseClass {
    walk() {
        console.log(`${this.name} is walking.`);
    }
};

// 2. Second "Parent" Mixin
const SwimMixin = (BaseClass) => class extends BaseClass {
    swim() {
        console.log(`${this.name} is swimming.`);
    }
};

// Base Class
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// 3. Child Class inheriting from BOTH Animal, WalkMixin, and SwimMixin
// We wrap our BaseClass with both mixins
class Frog extends SwimMixin(WalkMixin(Animal)) {
    constructor(name) {
        super(name);
    }
}

// Testing multiple inheritance
const myFrog = new Frog("Kermit");

console.log(`Animal Name: ${myFrog.name}`);
myFrog.walk(); // Method inherited from WalkMixin
myFrog.swim(); // Method inherited from SwimMixin
