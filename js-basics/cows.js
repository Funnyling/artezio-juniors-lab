/**
 * Too Many Sheep! (or, the else if statement)
 *
 * We’ve made a significant difference, but there are still too many
 * sheep for the fragile Death Valley ecosystem. The Rangers would like
 * you to implement the following new plan for population reduction:
 *
 * 1. If the month is a multiple of 4, then find 75% of the sheep population.
 *    Log that value to the console in the format below. Then, remove that value
 *    from the total number of sheep.
 * 2. Otherwise, if the population is above 10000, find half of the sheep population.
 *    Log that value to the console in the format below. Then, remove that value from
 *    the total number of sheep.
 *
 * Use this format for logging sheep reduction:
 * --------------------------------------------
 * Removing <number> sheep from the population.
 * --------------------------------------------
 */
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
    // insert code here
    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
