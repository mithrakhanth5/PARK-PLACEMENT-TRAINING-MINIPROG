// conditional statements
let num = 10;
if (num > 0) {
    console.log("The number is positive");
}

if (num % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

//nested if
if (num > 0) {
    if (num % 2 === 0) {
        console.log("The number is positive and even");
    }
    else {
        console.log("The number is positive and odd");
    }
}

// else if
if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// switch case
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Today is not Monday, Tuesday, or Wednesday");
}

//ternary operator
let age2 = 18;
let canVote = age2 >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);