"use script"

function Seven() {
    return 7;
}
console.log(Seven()); // Output: 7

// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.
// findFactors takes in the parameter 'num' which I will use to find the factors
// function checks if input 'num' is a number using typeof. if not returns false
function findFactors(num) {
    if(typeof num !== 'number') {
        return false;
    }
// if num is a number then the function creates an empty array called factors that will store all factors of input 'num'
    let factors = [];
// the function then loops through all numbers from 1 to 'num' using a for loop.
//checks if num is divisible. if divisible by current number, means that the current # is a factor of 'num'
//then adds the number to the factor array using the push() method
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            factors.push(i);
        }
    }
// function returns the factors array with all factors of input num
    return factors;
}

findFactors(6); // returns [1,2,3,6];
findFactors(16); // returns [1,2,4,8,16];
findFactors(0); // returns [];
findFactors(true); // returns false;
findFactors("13"); // returns false;
findFactors([54,72,144]); // returns false;
findFactors({value: 64}); // returns false;
findFactors(); // returns false;


function countEs(str) {
    //typeof to check if the str is a string. if not typeof str !== string evals to true
    //
    if (typeof str !== 'string') {
        return false;
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'e') {
            count++;
        }
    }
    return count;
}
console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;