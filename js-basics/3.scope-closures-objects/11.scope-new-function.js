/**
 * @author ntishkevich
 */
var message = 'Hello, Window';

function getPrintFunction() {
    var message = 'Hello, Function';
    var greet = new Function('', 'console.log(message);');
    greet();
}

getPrintFunction();

