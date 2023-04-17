"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//    if (color === 'blue') {
//        return 'blue is the color of the sky';
//    } else if (color === 'red') {
//        return 'A stop sign is red';
//    } else if (color === 'green') {
//        return 'Grass is green';
//    } else if (color === 'yellow') {
//        return 'The color of the sun is yellow';
//    }
// }
// console.log(analyzeColor('blue')); // "blue is the color of the sky"
// console.log(analyzeColor('red')); // "A stop sign is red"
// console.log(analyzeColor('green')); // "Grass is green"
// console.log(analyzeColor('yellow')); // "The color of the sun is yellow"

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case 'blue':
            return 'blue is the color of the sky';
        case 'red':
            return 'A stop sign is red';
        case 'green':
            return 'Grass is green';
        case 'yellow':
            return 'The color of the sun is yellow';
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt('Whats your favorite color?')

// alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    var discount = 0;
    switch (luckyNumber) {
        case 1:
        discount = 0.1;
        break;
        case 2:
        discount = 0.25;
        break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.5;
            break;
        case 5:
            return 0;
    }
    return totalAmount - (discount * totalAmount);
}
console.log(calculateTotal(0, 100)); // returns 100
console.log(calculateTotal(1, 100)); // returns 90
console.log(calculateTotal(2, 100)); // returns 75
console.log(calculateTotal(3, 100)); // returns 65
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100)); // returns 0
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = parseFloat(prompt("What is your total bill?"));
// alert("Your lucky number is! " + luckyNumber);
// alert("Price before discount: $" + totalBill.toFixed(2));
// alert("Price after discount: $" + calculateTotal(luckyNumber, totalBill).toFixed(2));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterNumber = confirm('Would you like to enter a number?');
if (enterNumber) {
    var number = prompt('Awesome! Please enter a number:');
    if (!isNaN(number)) {
        var isEven = number % 2 === 0;
        var isPositive = number >= 0;
        var plus100 = Number(number) + 100;
        alert(`Your number is ${isEven ? 'even' : 'odd'}`);
        alert(`Your number plus 100 is ${plus100}`);
        alert(`Your number is ${isPositive ? 'positive' : 'negative'}`);
    } else {
        alert("Hey! That's incorrect: please enter a valid number");
    }
}

