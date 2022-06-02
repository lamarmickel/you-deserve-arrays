const prompt = require('prompt-sync')({sigint: true});
let userArray = JSON.parse(prompt("Enter an array: "));

if(typeof userArray[0] === "number"){
    console.log(" The first item in the array" + userArray[0] + "is a number")
} if (typeof userArray[0] !== "number"){
    console.log(" The first item in the array" + userArray[0] + " is not a number")
}