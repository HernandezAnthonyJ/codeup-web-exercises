"use strict"

//1.Create a file named while.js in the js directory.

//2.Create a while loop that uses console.log() to create the output shown below.

let j = 2;
while (j <= 65536) {
    console.log(j);
    j *= 2;
}
//An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= allCones) {

        console.log(cones + " cones sold...");
        allCones -= cones;
    } else {
        console.log("Cannot sell you " + cones + " cones I only have " + allCones + "...");
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");