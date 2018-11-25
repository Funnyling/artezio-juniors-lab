/**
 * @author ntishkevich
 */

// Function Declaration
function sayDeclarition(name) {
    alert('Привет, ' + name);
}

// Function Expression
var sayExpression = function (name) {
    alert('Привет, ' + name);
};

// Named Function Expression
var factor = function factorial(number) {
    return number ? number * factorial(number - 1) : 1;
};

function () {
    alert('Я анонимная функция');
}

sayDeclarition('Petya', function () {
    alert('Петя приветствует нас');
});

