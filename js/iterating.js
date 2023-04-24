(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    // used let to declare "names"
    let names = ["Anthony", "Vince", "Brandon", "Ray"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log used to log the length of the names to the console
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log statements used to log the individual names to the console
    console.log(names[0]); // Anthony
    console.log(names[1]); // Vince
    console.log(names[2]); // Brandon
    console.log(names[3]); // Ray
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    //the for loop used to iterate over the elements of the "names" and log in the console one by one
    //loop starts with counter variable i to 0 using var
    //the condition for the loop to continue is i is less than the length of the names which would be 4?
    //inside the loop the element of the names uses the value of i which is names[i]. then passes as an argument to the console log which logs it
    //so the first iteration of the loop is "i" is 0 so name[1] would be Anthony. i is 1 so name[1] would be Vince etc
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //forEach() is used to iterate over the elements of the names and log into the console
    //should take the function as an argument and calls the function once for each element of the array
    //would be a callback function and passes the current element of the array as an argument on each iteration
    //the callback function logs the current element using console.log(). the forEach() is used on the names array
    //so for the first one of forEach() loop, the first element of the names array (Anthony) should be logged and continues for each.
    names.forEach(function (name) {
    console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //first() returns the 1st element of the array by using the i[0]
    //second() returns the 2nd element of the array by using the i[1]
    //arr.length returns the length of the array
    //arr.length - 1 subtracts one from that number, turning it into an index
    //since arrays are zero based
    //this has 4 elements so the index of the first is 0 then 1,2,3.
    //so the index of the last one would be 3? so if the length is 4, - 1 gives 3
    // last() returns the last element of the array by using [arr.length - 1].
    //used return to call the function and return a specific element
    function first(arr) {
        return arr[0];
    }
    function second(arr) {
        return arr[1];
    }
    function last(arr) {
        return arr[arr.length - 1]
    }
    console.log(first(names));
    console.log(second(names));
    console.log(last(names));
})();