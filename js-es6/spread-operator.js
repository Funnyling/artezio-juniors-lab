/**
 * @author ntishkevich
 */
function bar(x, y, z) {
    return x + y + z;
}

const args = [0, 1, 2];
let result = bar.apply(null, args);

result = bar(...args);

function sum() {
    const args = Array.prototype.slice.call(arguments);
    return args.reduce((total, item) => total + item, 0);
}

sum(1, 2, 3, 4, 5);

function sum(...args) {
    return args.reduce((total, item) => total + item, 0);
}

sum(1, 2, 3, 4, 5);

function foo(x, y, ...args) {
    // code goes here

}
foo(1, 2, 3, 4, 5, 6); // x = 1, y = 2, args = [4, 5, 6];


const favoriteFruits = ['Apple', 'Banana', 'Grapes'];
const fruits = ['Strawberry', 'Orange', 'Cherry'];
const newArray = fruits.concat(favoriteFruits);

const favoriteFruits = ['Apple', 'Banana', 'Grapes'];
const fruits = ['Strawberry', ...favoriteFruits, 'Orange', 'Cherry'];
// ["Strawberry", "Apple", "Banana", "Grapes", "Orange", "Cherry"]

const favoriteFruits = ['Apple', 'Banana', 'Grapes'];
const fruits = ['Strawberry', 'Orange', 'Cherry'];
const someFruits = ['Mango', 'Pear', 'Raspberry', 'Watermelon'];

const aLotOfFruits = [...fruits, ...favoriteFruits, ...someFruits];
// ["Strawberry", "Orange", "Cherry", "Mango", "Apple", "Banana", "Grapes", "Pear", "Raspberry", "Watermelon"]