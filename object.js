// object methods
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
}
console.log(car.make);
console.log(car);
console.log(car["model"]);
car.year = 2021;
console.log(car.year);
car.color = "red";
console.log(car.color);
delete car.model;
console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
console.log(car.hasOwnProperty("make"));
console.log(car.hasOwnProperty("model"));