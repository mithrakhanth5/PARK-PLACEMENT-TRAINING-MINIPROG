//function
function great(name) {
    return "hello," + name + "|";
}

console.log(great("alice"));

//arrow function
const greetArrow = (name) => {
    return "Hello, " + name + "!";
}

console.log(greetArrow("Bob"));

//shorter arrow function
const greetShort = name => "Hello, " + name + "!";
console.log(greetShort("Charlie"));


//default parameters
function greetDefault(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greetDefault());
console.log(greetDefault("Dave"));