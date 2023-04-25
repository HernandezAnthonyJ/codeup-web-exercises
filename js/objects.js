(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
        // (ah) object created with two properties "firstName" and "lastName"
        // (ah) gave firstName a value of "Anthony"
        // (ah) gave lastName a value of "Hernandez"
        // (ah) console.log which will output the values to the console
    let person = {
        firstName: "Anthony",
        lastName: "Hernandez",
    };

        console.log(person.firstName, person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     *Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function sayHello() {
        return ("Hello from " + person.firstName + " " + person.lastName + "!");
    };
        console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //(ah)array called shoppers with 3 objects each representing a shopper with a "name" and "amount"
        //(ah)let used to declare shoppers with square brackets containing "name" & "amount"
        let shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
     ];
        //(ah) just an array of shoppers with their names and how much they spent

        //(ah) using forEach to call on the function (shopper)
        shoppers.forEach(function (shopper) {


         //(ah) if else statement that checks if the amount of what the shopper spent is greater than 200
         //(ah) if it is then a discount of 12% will be calculated & printed to the console
         //(ah) if it's less than 200 than a message will be printed showing the shopper didn't qualify for a discount
         //(ah) a variable discount is then declared and assigned "shopper.amount * .12" which is 12% of shoppers original amount
         //(ah) a variable newAmount is then declared and assigned "shopper.amount - discount" which is the original amount with the discounted amount
         //(ah) using "toFixed to called on newAmount to ensure its formatted correctly
         //(ah) used console.log to print shoppers name. the original amount w/o discount and the new amount they will have after discount
         //(ah) if the "if" condition isn't met then the else will be executed and printing a message to the console
         //(ah) *stating the shopper didn't qualify for the discount
            if (shopper.amount > 200) {
                let discount = shopper.amount * .12;
                let newAmount = shopper.amount - discount;
                console.log(shopper.name + " you would've spent $" + shopper.amount + ", but your discounted total is now $" + newAmount.toFixed(2) + "!!");
                } else { if (shopper.amount > 200) {
                let discount = shopper.amount * .12;
                let newAmount = shopper.amount - discount;
                console.log(shopper.name + " you would've spent $" + shopper.amount + ", but your discounted total is now $" + newAmount.toFixed(2) + "!!");
            } else {
                console.log(shopper.name + " you still owe $" + shopper.amount + ", you did not get a discount :(");
            }
                console.log(shopper.name + " you still owe $" + shopper.amount + ", you did not get a discount :(");
            }
    })




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // let books = [
    //         {
    //         title: "Harry Potter and the Sorcerer's Stone",
    //         author: {
    //             firstName: "J.K.",
    //             lastName: "Rowling"
    //         }
    //     },
    //     {
    //         title: "The Last Wish",
    //         author: {
    //             firstName: "Andrzej",
    //             lastName: "Sapkowski"
    //         }
    //     },
    //     {
    //         title: "Insurgent",
    //         author: {
    //             firstName: "Veronica",
    //             lastName: "Roth"
    //         }
    //     },
    //     {
    //         title: "Catching Fire",
    //         author: {
    //             firstName: "Suzanne",
    //             lastName: "Collins"
    //         }
    //     },
    //     {
    //         title: "The Outsiders",
    //         author: {
    //             firstName: "S.E.",
    //             lastName: "Hilton"
    //         }
    //     }
    // ];
    // console.log(books[0].title); // "Harry Potter and the Sorcerer's Stone"
    // console.log(books[0].author.firstName); // "J.K."
    // console.log(books[0].author.lastName); // "Rowling"
    // console.log(books[1].title); // "The Last Wish"
    // console.log(books[1].author.firstName); // "Andrzej"
    // console.log(books[1].author.lastName); // "Sapkowski"
    // console.log(books[2].title); // "Insurgent"
    // console.log(books[2].author.firstName); // "Veronica"
    // console.log(books[2].author.lastName); // "Roth"
    // console.log(books[3].title); // "Catching Fire"
    // console.log(books[3].author.firstName); // "Suzanne"
    // console.log(books[3].author.lastName); // "Collins"
    // console.log(books[4].title); // "The Outsiders"
    // console.log(books[4].author.firstName); // "S.E."
    // console.log(books[4].author.lastName); // "Hilton"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //(ah) for loop
    //(ah)
    //      for (let i = 0; i < books.length; i++) {
    //         let book = books[i];
    //         let authorFullName = book.author.firstName + " " + book.author.lastName;
    //         console.log(`Book ${i + 1}: ${book.title} by ${authorFullName}`);
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    //(ah) function called createBook that takes 3 parameters
    //(ah) title, author fist name and author last name
    //(ah) returns an object that represents a book/first and last name
    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
    }
    //(ah) function called showBookinfo that takes 1 parameter called book
    //(ah) book is object with 2 properties title and author. author is another object that
    //(ah) has two properties first and last name
    //(ah) prints out title and author of book
    //(ah) function carries authorFullName by concatenating the first and last name properties of book.author
    //(ah) prints out string that includes books title and full name of author
    function showBookInfo(book) {
        let authorFullName = book.author.firstName + " " + book.author.lastName;
        console.log(`${book.title} by ${authorFullName}`);
    }
    //(ah) let declares statement that creates an array of books
    //(ah) books array is initialized with results of calling the createBook function with 5 sets of arguments
    //(ah) each represents books info, title & name
    //(ah) createBook functions just creates an object representing a book with its info
    let books = [
        createBook("Harry Potter and the Sorcerer's Stone, J.K., Rowling"),
        createBook("The Last Wish, Andrzej, Sapkowski"),
        createBook("Insurgent, Veronica, Roth"),
        createBook("Catching Fire, Suzanne, Collins"),
        createBook("The Outsiders, S.E., Hilton")
    ];

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        console.log(`Book ${i + 1}: `);
        showBookInfo(book);
    }
})();