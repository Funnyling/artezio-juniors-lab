/**
 * Сортировка объектов
 *
 * Напишите код, который отсортирует массив объектов people по полю age.
 * Выведите список имён в массиве после сортировки.
 */
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

// ... ваш код ...

// теперь people: [vovochka, masha, vasya]
alert(people[0].age); // 6


/**
 * Добавить класс в строку
 *
 * В объекте есть свойство className,
 * которое содержит список «классов» – слов, разделенных пробелом  className: 'open menu'
 *
 * Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
 * но только если его там еще нет. Функция не должна добавлять лишних пробелов.
 *
 */
var obj = {
    className: 'open menu'
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className); // "open menu new me"

/**
 * Перепишите цикл через map
 * Код ниже получает из массива строк новый массив, содержащий их длины.
 */
var arr = ["Есть", "жизнь", "на", "Марсе"];

var newArray = [];

// Переписать цикл
for (var i = 0; i < arr.length; i++) {
    newArray[i] = arr[i].length;
}

alert(newArray); // 4,5,2,5
