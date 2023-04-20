"use strict"
//(ah) notes to self for better understanding as I write and look back at work

//1.Create a file named while.js in the js directory.

//2.Create a while loop that uses console.log() to create the output shown below.
//(ah) let j = 2 sets j with the value of 2
//(ah) while (j <= 65536) sets up the loop that will continue to execute as long as j is less than or equal to 65536
//(ah) console.log(j) outputs the value of j to console
//(ah) j *= 2 updates the value of j by mutliplying it by 2, doubling the value on each iteration of the loop
//(ah) the loops continues from step 2 doubling j until it reaches of 65536
//(ah) once j hits 65536 the loop ends
//(ah) uses a while loop to output a sequence of powers of two, starting from 2 and doubling the value on each iteration until it reaches or exceeds 65536.
let j = 2;
while (j <= 65536) {
    console.log(j);
    j *= 2;
}
//Question/ An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


//(ah) let allCones = Math.floor(Math.random() * 50) + 50 gives a variable allCones with a random # from 50-99. giving the total # of cones available
//(ah) from do {} to while(allCones) sets up a do-while loop that will execute as long as there are still cones left
//(ah) let cones = Math.floor(Math.random() * 5) + 1 gives a variable "cones" with a random # between 1 & 5. showing the # of cones a customer wants to buy
//(ah) if (cones <= allCones) else checks if there are enough cones left to sell
//(ah)if there is it logs a message saying how many were sold and subtracts the # of sold cones from allCones
//(ah)then continues with next iteration and if there is not enough it logs a message saying just that
//(ah)the loop continues until all cones have been sold and gives the YAY MESSAGE
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