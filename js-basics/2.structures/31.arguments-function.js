/**
 * @author ntishkevich
 */
function sayHi() {
    for (var i = 0; i < arguments.length; i++) {
        alert('Hello, ' + anotherResult[i]);
    }
}

sayHi('Benedict', 'John', 'Mickle'); // Hello, Benedict ...

function sayHi() {
    alert('Hello ' + arguments.join(', '));
}