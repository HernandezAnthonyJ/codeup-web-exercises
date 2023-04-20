"use strict"
//(ah) notes to self for better understanding as I write and lock back at work


//Break and Continue
//1.Create a file named break_and_continue.js in the js directory.
//2.    Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//3.    Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

//(ah)function created validNumber to take in a single input
//(ah)input = parseFloat(input) checking whether its a number and its value. attempting to convert the input value to a floating point #
//(ah)!isNaN(input)checking whether input value is valid #.
//(ah)input >= 1 && input <= 50 checking whether the input value is between 1 & 50
//(ah)input % 2 !== 0 checks whether the input is odd. checks remainder of dividing the input by 2 is not = to 0. if remain is 0 then the value will return false
//(ah)function takes an input value, checks if its a valid odd # between 1 & 50. returns either true or false based on result of check.

function validNumber(input) {
    input = parseFloat(input);
    return(input >= 1 && input <= 50) && (input % 2 !== 0) && (!isNaN(input));
}
//2. Prompt for user to enter an odd number
//(ah)used function called userNumber thats uses the validNumber function to prompt the user to enter an odd # between 1 & 50.
//(ah)The while(true) loop is an infinite loop that will continue until the break is encountered.
//(ah)The prompt statement displays a box asking the user to enter the #. the input value is then stored in the variable called "userNumber"
//(ah)if (validNumber(userNumber)) checks whether the input is valid using validNumber function. If its valid the break statement is executed which leaves the loop & continues the rest of the function
//(ah)alert displays an error message to the user if the input is not valid. the loop continues and prompts the user for input again
//(ah)once a valid input is entered the functions exits the loop and returns "userNumber" value
//(ah)this function uses an infinite loop to prompt the user for input until a valid odd number between 1 and 50 is entered.
//(ah)It uses the validNumber function to check whether the input value is valid, and displays an error message if it is not. The function then returns the valid input value.
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
//(ah)function called consoleMessage that takes on userNumber
//(ah)console.log("The Number to skip is: " + userNumber) outputs a message to console stating the value of userNumber
//(ah)console.log("") adds a blank line to the console
//(ah)the for loop iterates through #s 1-50 incrementing by 1 on each iteration
//(ah)if (i === parseFloat(userNumber))checks whether the current value of i is equal to the userNumber entered by the user
//(ah)if it is a message is logged to the console informing the user that the number is being skipped
//(ah)the continue statement is used to skip to the next iteration of the loop
//(ah)if i % 2 === 0 checks whether the current value of i is even. if it is the continue statement is used to skip to the next iteration of the loop
//(ah)if not the continue statements are executed, the code inside the if is executed & logs a message to the console saying the current the value of 1 is an odd #
//(ah)so the function takes an input value userNumber, logs a message to the console indicating the value of userNumber
//(ah)then skips over the number entered by the user and any even numbers using continue statements, and logs a message to the console indicating each odd number between 1 and 50, except for the number entered by the user.

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