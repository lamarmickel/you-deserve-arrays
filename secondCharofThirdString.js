const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

if (typeof userArray[2] === "string"){
    userArray = userArray[2]
    console.log(userArray[1])
} else {
    console.log(" Error")
}