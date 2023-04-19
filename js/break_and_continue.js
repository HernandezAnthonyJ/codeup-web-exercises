"use strict"

//Break and Continue
//1.Create a file named break_and_continue.js in the js directory.
//2.    Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//3.    Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


function validNumber(input) {
    input = parseFloat(input);
    return(input >= 1 && input <= 50) && (input % 2 !== 0) && (!isNaN(input));
}
//2. Prompt for user to enter an odd number
function userNumber() {
    while (true) {
        var userNumber = prompt("Hey! Yes you! Enter an odd number between 1 & 50");
        if (validNumber(userNumber)) {
            break;
        }
        alert("NO NO NO! Try again.")
    }
    return userNumber;
}

function consoleMessage (userNumber) {
    console.log("The Number to skip is: " + userNumber);
    console.log("");
    for (var i = 1; i<=50; i +=1) {
        if (i === parseFloat(userNumber)) {
            console.log("HEY! Skipping number: " + userNumber)
            continue;
        }
        if (i % 2 === 0) {
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}

consoleMessage(userNumber());