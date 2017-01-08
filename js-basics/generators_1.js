/**
 *
 * The Hoover Dam has 19 generators of multiple types. For simplicity,
 * let’s say that the first 4 of these generators output 62 megawatts,
 * and the other 15 output 124 megawatts. In hooverDam.js, the Dam Rangers have
 * asked you to design a system of two loops that turns each generator on in progression,
 * and prints the new total of megawatts generated.
 *
 * They’d like the first loop to be a while loop handling the first 4 generators.
 * Then, they’d like the second loop to be a for loop that handles the other 15 generators.
 * Each output line should resemble the following lines,
 * with adjusted values for the currentGen and totalMW:
 * ---------------------------------------------------------
 * Generator #1 is on, adding 62 MW, for a total of 62 MW!
 * Generator #2 is on, adding 62 MW, for a total of 124 MW!
 * ---------------------------------------------------------
 *
 * We’ve given you some starting variables to use in your build.
 */
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

/**
 * The people at the Hoover Dam have called you back, and would like a program that
 * shows what happens when only the even numbered turbines are turned on.
 * And they want it all in just one for loop. With a set of complex conditional statements inside
 * the loop, construct a way to only turn on even numbered turbines. Remember our power output situation:
 * Generators 1 through 4 produce 62 MW.
 * Generators 5 through 19 produce 124 MW.
 * The output should follow this format:
 * Generator #1 is off.
 * Generator #2 is on, adding 62 MW, for a total of 62 MW!
 * We’ve given you some starting variables to use in your build.
 * Within your loop, consider the possible scenarios when building your conditions:
 * The Generator provides 62 MW of power.
 * The Generator provides 124 MW of power.
 * The Generator is off.
 */
var totalGen = 19;
var totalMW = 0;