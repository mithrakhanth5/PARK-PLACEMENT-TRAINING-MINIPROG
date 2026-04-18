//loops
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

let j = 0;
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;
}

let k = 0;
do {
    console.log("Do-while loop iteration: " + k);
    k++;
} while (k < 5);

//map
let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers2.map(num => num * num);
console.log(squaredNumbers);

//for each
numbers2.forEach(num => console.log("ForEach: " + num));