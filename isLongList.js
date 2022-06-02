const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray);

if(userArray.length >= 10){
    console.log(" The length of this array is at least 10: " + userArray.length)
}