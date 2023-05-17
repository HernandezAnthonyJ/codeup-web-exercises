document.getElementById("main-heading").addEventListener("dblclick", function () {
    this.innerText = "DOM Events: An Lecture"; // this refers to the element on which the event listener was added to/called on.
    document.getElementsByTagName("title")[0].innerText = "DOM Events Lecture";
    document.getElementsByTagName("body")[0].classList.add("dom-lec-start");
});

function diceRoll() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("lorem")[0].textContent = "" + randomNumber;
    this.removeEventListener("click", diceRoll);
}

document.getElementById("click-me").addEventListener("click", diceRoll);

// document.getElementById("click-me").removeEventListener("click", diceRoll);

document.getElementById("main-heading").addEventListener("mouseenter", function() {
    this.classList.add("makeItBlue");
});

document.getElementById("main-heading").addEventListener("mouseleave", function() {
    this.classList.remove("makeItBlue");
});

document.getElementById("rat").addEventListener("mouseenter", function() {
    document.getElementById("rat-info").classList.remove("hide");
});

document.getElementById("rat").addEventListener("mouseleave", function() {
    document.getElementById("rat-info").classList.add("hide");
});

document.getElementById("password-strength-check").addEventListener("input", function() {
    let goodPassword = this.value.length > 8 && this.value.indexOf("!") > -1 && this.value.indexOf("2") > -1;
    if (goodPassword) {
        document.getElementsByTagName("body")[0].classList.add("good-pass");
    } else {
        document.getElementsByTagName("body")[0].classList.remove("good-pass");
    }
});
