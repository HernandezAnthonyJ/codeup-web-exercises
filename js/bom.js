// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

// the setInterval() function takes in a function and an interval as parameters and returns an interval id.
// The function will continue to be executed at the interval until clearInterval() is called with the correct interval id.
// Intervals should be specified in milliseconds.



// The setTimeout() method allows code to be executed after specified time interval has passed. The specified code will only be executed once.
// The timeout code execution can be cancelled via the clearTimeout() method.

var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring