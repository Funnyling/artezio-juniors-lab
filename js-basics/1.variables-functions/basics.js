(function () {
    // Глобальная переменная
    helloWorld = 'Hello World';


    //Валидные имена переменных
    var name = 'John';
    var age = 30;
    var isMale = true,
        $jqueryElement = {};

    var _ = 'Underscore',
        $ = 'Strange variable name',
        $jqueryElement = {};

    // var 2017year = 'New year';


    var numericValue = -2;
    numericValue = +numericValue; // -2
    numericValue = -numericValue; // 2
    ++numericValue; // 3
    --numericValue; // 2

    var n = 123;
    n = 12.345;
    n = 3.14159265359e10;
    n = 090;
    n = 0x10201;
    var nullVariable = null;
    var undefinedVariable = null;

    alert(null >= 0); // true

    alert( undefined > 0 ); // false (1)
    alert( undefined < 0 ); // false (2)
    alert( undefined == 0 ); // false (3)

    var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

    if (year != 2011) alert( 'А вот и неправильно!' );

    var access;
    var age = prompt('Сколько вам лет?', '');

    if (age > 14) {
        access = true;
    } else {
        access = false;
    }

    alert(access);

    var access = (age > 14) ? true : false;

    access = age > 14;


    var age = prompt('возраст?', 18);

    var message = (age < 3) ? 'Здравствуй, малыш!' :
        (age < 18) ? 'Привет!' :
            (age < 100) ? 'Здравствуйте!' :
                'Какой необычный возраст!';

    alert( message );

    var company = prompt('Какая компания создала JavaScript?', '');

    if (company == 'Netscape') {
        alert('Да, верно');
    } else {
        alert('Неправильно');
    }

    var isAdmin = confirm("Вы - администратор?");

    alert( isAdmin );

    var years = prompt('Сколько вам лет?', 100);
    alert('Вам ' + years + ' лет!');

    var test = prompt("Тест");

    var test = prompt("Тест", ''); // <-- так лучше

    alert( !!"0" ); // true
    alert( !!" " ); // любые непустые строки, даже из пробелов - true!

    alert( 0 == "\n0\n" ); // true


    alert( null > 0 ); // false (не больше)
    alert( null == 0 ); // false (и не равен!)
    alert( null >= 0 ); // true, т.к. null преобразуется к 0 RTFM!11

    alert( undefined > 0 ); // false, т.к. undefined -> NaN
    alert( undefined == 0 ); // false, т.к. это undefined (без преобразования)
    alert( undefined < 0 ); // false, т.к. undefined -> NaN

    var benedict = {
        name: 'Бенедикт Камбербэтч',
        age: 30,
        country: 'Великобритания'
    };

    var sheeps = 0;
    while (sheeps < 3) {
        alert(sheeps);
        sheeps++;
    }

    var sheep = 0;
    do {
        alert(sheep);
        //sheep++;
    } while (sheep++ < 3);

    for(var sheep; sheep < 9; sheep++) {
        alert(sheep);
    }

    function sayDeclarition(name) {
        alert('Привет, ' + name);
    }

    var sayExpression = function (name) {
        alert('Привет, ' + name);
    };

    var factor = function factorial(number) {
        return number ? number * factorial(number - 1) : 1;
    };

    sayExpression('Вася'); // Привет, Вася
    sayDeclarition('Вася'); // Привет, Вася
    function resolveDirection() {return '';}

    var direction = resolveDirection();
    switch(direction) {
        case 'left':
            alert('Left');
            break;
        case 'right':
            alert('Right');
            break;
        case 'forward':
            alert('Forward');
            break;
        case 'back':
            alert('Back');
            break;
        default:
            alert('Неверное направление');
    }

    var sum = new Function('a,b', ' return a+b; ');

    var result = sum(1, 2); // 3

    var pass = prompt('Введите пароль администратора?');

    var onEnterFunction = (pass === 'pa$$word') ?
        function () { alert('Вы вошли как администратор.');  } :
        function () { alert('Неверный пароль.'); };

    onEnterFunction();

    var onEnterFunction = function (password, equalityFunc, mismatchFunc) {
        if (password === 'pa$$word') {
            return equalityFunc;
        } else {
            return mismatchFunc;
        }
    };

    function equalityFunc() {
        alert('Вы вошли как администратор.');
    }

    var action = onEnterFunction("123qweASD_1", equalityFunc, function () { alert('Неверный пароль.')});
    action();

    var helloWorldMsg = 'Hello,' + ' JavaScript'; // Hello, JavaScript
    var universalAnswer = 'Magic number' + 42; // Magic number 42

    var result = 21 * '2'; // 42
    result = 'abc' * 2; // NaN

    'А' < 'Б'; // true
    'Компьютер' > 'Коллега'
    'Правило' > 'Право'

    '2' > 1 // true, сравнивается как 2 > 1


    '01' === 1 // false
    false === 0 // false
    true === 1 // false

    null == undefined
    +null // 0
    +undefined // undefined

    true || true // true
    false || true // true
    true || false // true
    false || false // false
    true || (x = 1)

    false || 'верну строку'
    1 || 0

    1 && 5
    null && 5
    !!5
    !!null
    !true
    !0

    var sum = 0;

    while (true) {
        var value = +prompt("Введите число", '');
        if (!value) break; // выходим из while
        sum += value;
    }

    var sum = 0;
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) continue;
        sum += i;
    }

})();