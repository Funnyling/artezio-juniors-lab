/**
 * @author ntishkevich
 */
function greet(name) {
    // LexicalEnvironment = { name: 'World', greetings: undefined }
    var greetings = 'Hello, ' + name;

    // LexicalEnvironment = { name: 'World', greetings: 'Hello, World' }
    onsole.log(greetings);
}

greet('World');

var hello = 'こんにちわ, ';

function greet(name) {
    var hello = 'Hello, ';
    var greetings = hello + name;
    console.log(greetings);
}

greet('World');

var hello = 'こんにちわ, ';

function greet(name) {
    var greetings = hello + name;
    console.log(greetings);
}
greet('Onizuka');

hello = 'Hello, ';

greet('World');