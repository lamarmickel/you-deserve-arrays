const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray);

console.log("The last item from that array is: " + userArray[userArray.length-1]);

