(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    //(ah)created a new array called planetsArray by splitting planetsString using the comma as the separator
    //(ah) planetsArray contains same planet names as "planetStrings" but each is now its own element in the array
    planetsArray = planetsString.split(",");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

        //(ah) created string that will separate each planet with the <br> tag
        //(ah) useful cause now each planet is on a new line when printed
        //(ah) using join() on planetsArray with <br> as its separator
    var brPlanets = planetsArray.join('<br>');

    console.log(brPlanets);

        //(ah) created a string but this time displaying planets in an unordered list
        //(ah) using <ul><li> has the opening ul tag then the 1st li tag plus the first planet in the array
        //(ah) then the planets in array are joined by using </li><li> as a separator to add li tag and closing to each planet
        //(ah) li ul tags are used to close the unordered list
    var ulPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    console.log(ulPlanets);
})();