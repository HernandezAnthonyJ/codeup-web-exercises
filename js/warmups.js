"use script"

// function Seven() {
//     return 7;
// }
// console.log(Seven()); // Output: 7
//
// // Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.
// // findFactors takes in the parameter 'num' which I will use to find the factors
// // function checks if input 'num' is a number using typeof. if not returns false
// function findFactors(num) {
//     if(typeof num !== 'number') {
//         return false;
//     }
// // if num is a number then the function creates an empty array called factors that will store all factors of input 'num'
//     let factors = [];
// // the function then loops through all numbers from 1 to 'num' using a for loop.
// //checks if num is divisible. if divisible by current number, means that the current # is a factor of 'num'
// //then adds the number to the factor array using the push() method
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//             factors.push(i);
//         }
//     }
// // function returns the factors array with all factors of input num
//     return factors;
// }
//
// findFactors(6); // returns [1,2,3,6];
// findFactors(16); // returns [1,2,4,8,16];
// findFactors(0); // returns [];
// findFactors(true); // returns false;
// findFactors("13"); // returns false;
// findFactors([54,72,144]); // returns false;
// findFactors({value: 64}); // returns false;
// findFactors(); // returns false;
//
//
// function countEs(str) {
//     //typeof to check if the str is a string. if not typeof str !== string evals to true
//     //
//     if (typeof str !== 'string') {
//         return false;
//     }
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === 'e') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;
//
// function containsE(str) {
//     if (typeof str !== 'string') {
//         return false;
//     }
//     return str.toLowerCase().indexOf('e') !== -1;
// }
// // Write a function named fizzBuzz that prints to the console the number 1 - 100.
// // If the number is divisible by 3 print fizz instead of the number.
// // If the number is divisible by 5 print buzz.
// // If the number is divisible by both 3 and 5 print fizzBuzz.
//
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

int = i = 2;
do {
    System.out.println(i*i);
    i *= i;
} while(i < 1000000);

// Write a function that takes in an array of numbers and returns all of the numbers added together
// (We'll be assuming that only arrays are going to be used with this function).

function addEmUp(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}
console.log(addEmUp([2, 6, 19])); // returns 27
console.log(addEmUp([-99, 180, -5])); // returns 76
console.log(addEmUp([44, 10, 7])); // returns 61
console.log(addEmUp([-100])); // returns -100
console.log(addEmUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
console.log(addEmUp([-13, -92, -3500])); // returns -3605


