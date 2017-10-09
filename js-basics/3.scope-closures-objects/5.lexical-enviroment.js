/**
 * @author ntishkevich
 */
function greet(name) {
    // LexicalEnvironment = { name: 'Кадгар', greetings: undefined }
    var greetings = 'Hello, ' + name;

    // LexicalEnvironment = { name: 'Кадгар', greetings: 'Hello, Кадгар' }
    alert(greetings);
}

greet('Кадгар');