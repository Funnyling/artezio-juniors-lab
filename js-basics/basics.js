/**
 * @author ntishkevich
 * @version 27.12.2016
 */
(function () {
    // Глобальная переменная
    helloWorld = 'Hello World';


    //Валидные имена переменных
    var name = 'John';
    var age = 30;
    var isMale = true;

    var _ = 'Underscore',
        $ = 'Strange variable name',
        $jqueryElement = {};

    var a = -2;
    a = +a;
    a = -a;

    var n = 123;
    n = 12.345;
    n = 3.14159265359e10;
    n = 090;
    n = 0x10201;
    var value = null;

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

    access = (age > 14) ? true : false;

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


    alert( null >= 0 ); // true, т.к. null преобразуется к 0
    alert( null > 0 ); // false (не больше), т.к. null преобразуется к 0
    alert( null == 0 ); // false (и не равен!), т.к. == рассматривает null особо.

    alert( undefined > 0 ); // false, т.к. undefined -> NaN
    alert( undefined == 0 ); // false, т.к. это undefined (без преобразования)
    alert( undefined < 0 ); // false, т.к. undefined -> NaN











})();