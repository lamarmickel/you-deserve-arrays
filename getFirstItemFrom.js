const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray);

console.log("The first item in that array is: " + userArray[0]);



