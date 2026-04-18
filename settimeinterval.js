setTimeout(() => {
    console.log("This message run after 2 secoun");

}, 2000);

// interval
let count = 1;
let intervalID = setInterval(() => {
    console.log("interval count: " + count);
    count++;
    if (count === 100) {
        clearInterval(intervalID);
    }
}, 1000);