"use script";
//(ah) notes to self for better understanding as I write and look back at work

//Question 2 Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//so I defined a function named showMultiplicationTable that accepts a number as asked.
//Then I used a for loop to iterate from 0 to 10.
//multiplying the loop index, the (i) by the number and in return it logs the end result to the console.
function showMultiplicationTable(number) {
    for (var i = 0; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' + i * number);
    }
}
//Question 3 Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
//(ah)using a for loop for var (i) set to 0 & a condition to run the loop as long as (i) is less than 10.
//(ah)each iteration should then display a random # between 20 & 200 using "random" and the Math.floor/Math.random methods.
//(ah)math.random() returns a random # between 0 & 1. multiplying it by 200 & adding 20 gives a random # between 20 and 219.
//(ah)var random = Math.floor((Math.random() * 200) + 20) generates the random #s and assigns it the var "random".
//(ah)if (random % 2 === 0) checks if random # is even using modulus(%) to get remainder when # is divided by 2. if remain is 0 then # is even.
//(ah)console log(even) prints message to the console that its even
//(ah)else is executed if random # is not
//(ah)console log(odd) is displayed if random # is odd
for (var i = 0; i < 10; i++) {
    var random = Math.floor((Math.random() * 200) + 20);
    if (random % 2 === 0) {
        console.log(random + ' is even');
    } else {
        console.log(random + ' is odd');
    }
}
//Question 4 Create a for loop that uses console.log to create the output shown below.
//(ah)var i = 0 initializes var i to 0(this is the loop counter)
//(ah)i < 0 specifies loop. loop will continue as long as i is less than 10.
//(ah)i++ increments i by 1 after each iteration of loop
//(ah)var x = i assigns value of i to new var x
//(ah)var xstr = x.toString(x) converts value of x to string
//(ah)var rep = xstr.repeat(x) repeats string value of "x" an x number of times and assigns the result to new var "rep"
//(ah)console log(rep) displays the value of "rep"
for ( var i = 0; i < 10; i++) {
    var x = i;
    var xstr = x.toString();
    var rep = xstr.repeat(x)
    console.log(rep)
}
//Question 5 Create a for loop that uses console.log to create the output shown below.
//(ah)var i = 105 sets var i to 105 which is the starting value of loop counter
//(ah)i > 5 specifies loop. loop will continue as long as i is greater than 5
//(ah)i - 5 is executed at then end of each loop to decrement i by 5
//(ah)console log(i - 5) outputs the value to console. since i starts at 105 it will be decremented by 5 at each iteration so 100,95,90,85 etc
for (var i = 105; i > 5; i - 5) {
    console.log(i - 5);
    i-=5;
}