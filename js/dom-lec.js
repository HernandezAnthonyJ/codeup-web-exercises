setTimeout(function () {
    document.getElementById("heading").innerText = "Howdy!";
    document.getElementById("heading").style = "color: red";
}, 2000);

let listItems = document.getElementsByClassName("list-item");

console.log(listItems);
listItems.style = "background-color: yellow";

for (let i = 0; i < listItems.length; i++) {
listItems.style = "background-color: yellow";
}

listItems[1].style = "background-color: steelblue; color: antiquewhite";

console.log(document.forms.login.username);

document.form.login.username.value = "BurgerKing";

let lorem = document