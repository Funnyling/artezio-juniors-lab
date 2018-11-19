/**
 * @author ntishkevich
 */
function sayHi() {
    for (var i = 0; i < arguments.length; i++) {
        console.log('Hello, ' + anotherResult[i]);
    }
}

sayHi('Benedict', 'John', 'Mickle'); // Hello, Benedict ...

function sayHi() {
    console.log('Hello ' + arguments.join(', '));
}