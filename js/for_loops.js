"use script";

//Question 2 Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(number) {
    for (var i = 0; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' + i * number);
    }
}
//Question 3 Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
for (var i = 0; i < 10; i++) {
    var random = Math.floor((Math.random() * 200) + 20);
    if (random % 2 === 0) {
        console.log(random + ' is even');
    } else {
        console.log(random + ' is odd');
    }
}
//Question 4 Create a for loop that uses console.log to create the output shown below.
for ( var i = 0; i < 10; i++) {
    var x = i;
    var xstr = x.toString();
    var rep = xstr.repeat(x)
    console.log(rep)
}
//Question 5 Create a for loop that uses console.log to create the output shown below.
for (var i = 105; i > 5; i - 5) {
    console.log(i - 5);
    i-=5;
}