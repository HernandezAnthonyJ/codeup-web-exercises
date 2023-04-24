(function(){
    "use strict";
//(ah) Self notes
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    //(ah) adding the string 'The Sun' to the beginning of the planets array.
    //(ah) using unshift adds one or more elements to the beginning of the array
    //(ah) and returns the new length of the array
    planets.unshift('The Sun');
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    //(ah) adding 'Pluto' to the end of the planets array.
    //(ah) using .push adds one or more elements to the end of the array
    //(ah) and returns the new length of the array
    planets.push('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    //(ah) removing 'The Sun' from the beginning of the planets array
    //(ah) using .shift removes the first element from an array and returns the removed element
    planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    //(ah) removing 'Pluto' from the end of the planets array
    //(ah) using .pop removes the last element from an array and returns the removed element
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    //(ah) indexOf returns the first index at which a given element can be found in an array or _1 if nothing is there
    //(ah) so indexOf Earth should return 2!
    let index = planets.indexOf('Earth');
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(index);

    //(ah) .reverse reverses the order of the elements in an array. first becomes last and the last array becomes first
    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    //(ah) .sorts sorts the elements of an array in ascending order.
    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);
})();