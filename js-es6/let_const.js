/**
 * @author ntishkevich
 */

// Problem 1
function createBtn() {
    var currentClass = 'btn-active';
    var btn = $('<button/>').addClass(currentClass).text('Press the button');
    btn.on('click', function (event) {
        /*
          ... код использующий переменную currentClass...
        */
        btn.removeClass(currentClass);
        currentClass = 'btn-disabled';
        if (btn.closest('#parent-form').hasClass('submit-form')) {
            var currentClass = extraButtonClasses();
            /*
              ... код использующий переменную currentClass...
            */
        }
        btn.addClass(currentClass);
    });
    return btn;
}

////////////////////////////////////

// Problem 2
function printAsync() {
    var fruits = ['Apple', 'Grape', 'Lemon', 'Pear', 'Quince'];
    for(let i = 0; i < fruits.length; i++) {
        setTimeout(function () {
            console.log('Index: ' + i + ' , fruit: ' + fruits[i]);
        }, 1000);
    }
}

printAsync();

function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            console.log('Shooter ' + i + ' fires.'); // выводит свой номер
        };
        shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();
army[0]();



function printSync() {
    var fruits = ['Apple', 'Grape', 'Lemon', 'Pear', 'Quince'];
    for(var i = 0; i < fruits.length; i++) {
        console.log('Index: ' + i + ' , fruit: ' + fruits[i]);
    }
}


// Problem 1
function createTdFixed(column) {
    let td = $('<td>', {colspan: column.colspan});
    let cssClass = 'btn-disabled';

    td.on('click', function (event) {
        //  ... code that uses cssClass...
        cssClass = event.target.data.cssClass;
        //noinspection JSUnresolvedVariable
        if (someCondition) {
            //noinspection JSUnusedLocalSymbols,JSUnresolvedFunction
            let cssClass = doEvilThing();
        }

        // ... more code ...
        //noinspection JSUnresolvedFunction
        applyClass(cssClass);

    });
    return td;
}

// Problem 2
function printAsyncFixed() {
    const fruits = ['Apple', 'Grape', 'Lemon', 'Pear', 'Quince'];

    for(let i = 0; i < fruits.length; i++) {
        setTimeout(function () {
            alert('Index: ' + i + ' , fruit: ' + fruits[i]);
        }, 1000);
    }
}

const API_KEY = '33d4b480-3c3e-48f7-a5ff-12c0e406f817',
    SALT = '1650d8f',
    VERSION = '1.0.0_RC';

var apples = 5;
if (true) {
    var apples = 10;
    console.log(apples); // 10 (внутри блока)
}
console.log(apples); // 10 (снаружи блока то же самое)

///////////////////////////////////////////////////

let apples = 5;
if (true) {
    let apples = 10;
    console.log(apples); // 10 (внутри блока)
}
console.log(apples); // 5 (снаружи блока значение не изменилось)


///////////////////////////////////////////
console.log(apples); // undefined
var apples = 5;

console.log(apples); // ошибка, нет такой переменной
let apples = 5;

var apples = 10;
var apples = 20;

let apples = 10;
let apples = 20; // SyntaxError

const apples = 5;
apples = 10; // ошибка

const style = {
    background: 'green'
};
style.textAlign = 'center';
style.verticalAlign = 'center';
