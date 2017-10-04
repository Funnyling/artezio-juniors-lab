/**
 * @author ntishkevich
 */
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

function containsAll(array) {
    for (let i = 1; i < arguments.length; i++) {
        let element = arguments[i];
        if (array.indexOf(element) === -1) {
            return false;
        }
    }
    return true;
}

containsAll(fruits, 'Strawberry', 'Orange', 'Cherry');


function containsAllWithRest(array, ...elements) {
    for (let i = 1; i < elements.length; i++) {
        if (array.indexOf(elements[i]) === -1) {
            return false;
        }
    }
    return true;
}

containsAllWithRest(fruits, 'Strawberry', 'Orange', 'Cherry');
