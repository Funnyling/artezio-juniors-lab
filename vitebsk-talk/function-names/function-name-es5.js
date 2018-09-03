const students = [
    {
        name: 'John',
        age: 17,
        gender: 'M',
        grade: 8,
        state: 'Florida',
    },
    {
        name: 'Sarah',
        age: 19,
        gender: 'F',
        grade: 9,
        state: 'Alaska'
    },
    {
        name: 'Peter',
        age: 21,
        gender: 'M',
        grade: 5,
        state: 'California'
    },
    {
        name: 'Bred',
        age: 19,
        gender: 'M',
        grade: 8,
        state: 'Florida'
    },
    {
        name: 'Garry',
        age: 24,
        gender: 'M',
        grade: 9,
        state: 'Tennessee'
    },
    {
        name: 'Samantha',
        age: 14,
        gender: 'F',
        grade: 7,
        state: 'California'
    },
    {
        name: 'Garold',
        age: 16,
        gender: 'M',
        grade: 8,
        state: 'Washington'
    },
    {
        name: 'David',
        age: 19,
        gender: 'M',
        grade: 8
    }
];

const states = students
    .filter(function (student) {
        return student.gender === 'M';
    })
    .map(function (student) {
        // Ошибка выпадет здесь, у объекта может не быть свойства state
        return student.state.toUpperCase();
    });

console.log(states);

/**
 * Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
 *  at <anonymous>:64:30
 *  at Array.map (<anonymous>)
 *  at <anonymous>:63:6
 */

// В принципе можно легко в данном примере понять откуда растут ноги ошибки,
// плюс можно поискать по toUpperCase места использования
// Но представьте себе, если бы мы могли видеть имена функций, в которых происходит ошибка?
// Как вы думаете стало ли бы нам легче отлаживать код?
// Опять вопрос к вам, знаете ли вы какие-нибудь способы как это сделать?

// Варианты: задать имя, вынести в переменную, вынести в именованное функциональное объявление

const menPredicate = student => student.gender === 'M'; // menPredicate
const stateMapper = student => student.state.toUpperCase(); // stateMapper
const states = students
    .filter(menPredicate)
    .map(stateMapper);

/**
 * Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
 *  at stateMapper (<anonymous>:59:46)
 *  at Array.map (<anonymous>)
 *  at <anonymous>:62:6
 */

// Все это замечательно, но в ES5 не было стандартизировано это поведение и не все браузеры и не всегда
// выводили имена функций в стеке ошибок. Занимательно то, что в ES6 стандартизовали свойство Function.name,
// которое доступно только для чтения и появилась возможность его выводить. И теперь жизнь стала легче.

function fetchStudent(successCallback) {
    // Какое значение будет у свойства name функции successCallback?
    console.log(successCallback.name);
    fetch('/students').then(successCallback);
}

fetchStudent(function (students) {
    // Я анонимная функция
});

// А как быть с ситуацией, когда у нас имеется функциональное выражение следующего вида?
const foo = function bar(i) {
    if (i < 10) return bar(i * 2);
    return i;
};

// Помимо Function.name бывает еще лексическое имя. Когда оно возникает?
// Как вы могли видеть ранее, оно возникает в случае организации рекурсии



