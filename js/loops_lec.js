"use strict";

//(function() {

//While Loops: Runs while our condition is true.
let areWeThereYet = false;

while (areWeThereYet === false) {
    areWeThereYet = confirm("Are we there yet");
}

alert("Thanks!");

function areWeThereYetNow() {
    let keepLooping = true;
    while (keepLooping) {
        keepLooping = !confirm("Are we there yet, now?");
    }
}

areWeThereYetNow();

//  while (true) {
//      alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now all of us are signing just because...");

// }

let companyHasEmail = true;

while (companyHasEmail === false) {
    companyHasEmail = confirm("Could we have your email?");
}

do {
    companyHasEmail = confirm("Please, could we have your email?");
} while (companyHasEmail === false)

// FOR LOOPS:
// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

for (let i = 0; i < 10; i++) {
    console.log(`This loop has run ${i + 1} time(s).`);
}

for (let i = 10; i > 0; i -=2) {
    console.log(i);
}

while(true) {
    if (confirm("Are we there yet???")){
        break;
    }
}

alert("WHOHOO! DISNEY WORLD!!!");

for (let i = 10; i > 0; i--) {
    if (i % 2 !== 0) {
        console.log("Oops: odd numbers!");
        continue;
    }
    console.log(i);
}


// })()

let count = 1;

while (count < 10) {
    console.log(count);
    count++;
}

let sum = 5;

do {
    console.log(sum);
    sum += 5;
} while (sum < 56);

for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(`${i} + ${j} + ${i + j}`);
    }
}