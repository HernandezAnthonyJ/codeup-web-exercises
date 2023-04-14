console.log("Hello from external JavaScript")

// alert('Welcome to my Website!');
alert('Welcome to my website!');

// asking for the user's favorite color
var favoriteColor = prompt("What is your favorite color?");

// alert message responding to user
alert('Great, ' + favoriteColor + ' is my favorite color too!');
console.log('The user entered'+ favoriteColor);

var littleMermaidDays = prompt("How many days are  you renting The Little Mermaid for?");
var brotherBearDays = prompt("How many days are  you renting Brother Bear for?");
var herculesDays = prompt("How many days are  you renting Hercules for?");

var totalDays = parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays);
var totalPrice = totalDays * 3;
// alert for the total price of rental
alert(`Here is the total price ${totalPrice} for renting the movies.`)

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");

var totalPayment = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
alert(`Your total payment for this week is ${totalPayment}.`);

// alert for responding user on class availability etc
var userInputClassFull = prompt('Is the class full? (type yes or no)');
var userInputClassSchedule = prompt('Does it conflict with the schedule? (type yes or no)');

if (userInputClassFull === "yes"){
    if (userInputClassSchedule === "yes"){
        console.log("You cannot be enrolled at this time")
    } else {
        alert("You are enrolled")
    }
    alert("You cannot be enrolled at this time")
} else {
    alert("You are enrolled")}

let numberOfItems = prompt("How many items are you buying?");
let offerExpired = false;
let isPremiumMember = true;

// Checking if the offer has expired
if (offerExpired) {
    alert("Sorry, the offer has expired and cannot be applied.");
} else {
    // Checking if the person is a premium member
    if (isPremiumMember) {
        alert("Congratulations! You are a premium member and can apply the product offer.");
    } else {
        // Checking if the person is buying more than the 2 items required for offer
        if (numberOfItems > 2) {
            alert("Congratulations! You have bought more than 2 items and can apply the product offer.");
        } else {
            alert("Sorry, you need to buy more than 2 items to apply the product offer.");
        }
    }
}

