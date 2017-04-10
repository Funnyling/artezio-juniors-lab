/**
 * @author ntishkevich
 */
function myFunction(x, y, z) {
    return x + y + z;
}

const args = [0, 1, 2];
let result = myFunction.apply(null, args);

result = myFunction(...args);

const favoriteFruits = ['Apple', 'Banana', 'Grapes'];
const fruits = ['Strawberry', ...favoriteFruits, 'Orange', 'Cherry'];
// ["Strawberry", "Apple", "Banana", "Grapes", "Orange", "Cherry"]

const someFruits = ['Mango', 'Pear', 'Raspberry', 'Watermelon'];

const aLotOfFruits = [...fruits, ...someFruits];
// ["Strawberry", "Apple", "Banana", "Grapes", "Orange", "Cherry", "Mango", "Pear", "Raspberry", "Watermelon"]