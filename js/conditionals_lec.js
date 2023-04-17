

if(true){
    console.log("this is if true")
} else {
    console.log("this is if false")
}


// if/else if/else example
// if (condition1) {
    // code here gets executed if condition1 evaluates to true

// } else if (condition2) {
    // code here gets executed only if condition1 is false *and* condition2 evaluates to true

// } else {
    // code here gets executed if neither condition1 nor condition2 evaluate to true
// }

 // var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');

 // if (weShouldDeleteStuff) {
    // delete all the things...
   // alert("Deleting all the things");
// } else {
//    alert("Operation Canceled!");
// }

// var pizzaPreference = prompt("What kind of pizza do you like?");

// if (pizzaPreference === "pineapple and hot sauce") {
//   alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//    alert("Just plain cheese? Okay...");
// } else {
//    alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }



// var message;

// if (success) {
//    message = "Operation was successful.";
// } else {
//    message = "Oops, something went wrong.";
// }

// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";


var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}
