/**
 * @author ntishkevich
 */
window.message = 'Hello, Window';

function getPrintFunction() {
    var message = 'Hello, Function';
    return new Function('', 'console.log(message);');
}

var printedMessage = getPrintFunction()();

