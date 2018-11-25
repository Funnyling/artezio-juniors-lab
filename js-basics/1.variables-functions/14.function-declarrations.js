/**
 * @author ntishkevich
 */
var pass = '';

// Конструктор Function(...)
var sum = new Function('a, b', ' return a + b; ');
var result = sum(1, 2); // 3

// Анонимные функции
var onEnterFunction = (pass === 'pa$$word') ?
    function () { alert('Вы вошли как администратор.');  } :
    function () { alert('Неверный пароль.'); };
onEnterFunction();


