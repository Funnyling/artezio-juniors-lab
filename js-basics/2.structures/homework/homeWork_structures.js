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

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age); // 6


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

console.log(obj.className); // "open menu new me"

/**
 * Напиши функцию pluck, которая берет массив объектов и
 * возвращает массив значений определенного поля.
 * Функция не должна изменять исходный массив.
 */
var characters = [
    { name: 'Михаил', age: 36 },
    { name: 'Фёдор', age: 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']

/**
 * Напиши функцию, считающую число свойств в объекте.
 * Функция не должна изменять исходный объект и
 * должна работать с различными объектами(строки, массивы, собственные объекты)
 */
var foo = { a: 1, b: 2 };
console.log(count(foo)); // 2

var bar = [];
console.log(count(bar)); // 0

var baz = [1, 2, 3];
console.log(count(baz)); // 3

var xyz = [];
xyz[100] = 1;
console.log(count(xyz)); // 1

var abc = 'string';
console.log(count(abc)); // 6

/**
 * Даны след. исходные данные, используя методы типа Array,
 * необходимо выполнить некие операции с массивом данных,
 * чтобы получился результат, описанный над каждой переменной
 */
var students = [
    {
        name: 'John',
        age: 17,
        gender: 'M',
        grade: 8,
        state: 'Florida'
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
    }
];


/**
 *
 * Записать выражения для подсчета и присвоения следующий данных
 *
 */


/**
 * [Number] количество совершеннолетних (возвраст >= 18)
 */
var adultsCount;


/**
 * [Number] Средний бал среди всех учащихся
 */
var meanGrade;


/**
 * [Number] Средний бал среди несовершеннолетних (возраст < 18)
 */
var teenMeanGrade;


/**
 * [Number] Средний бал среди совершеннолетних парней
 */
var menMeanGrade;


/**
 * [Array<Srudent>] Массив учащихся, отсортированных по возрастанию балов.
 */
var studendsByGrades;


/**
 * [Array<String>] Массив имен всех учащихся
 */
var studentNames;


/**
 * [Array<String>] Массив имен всех девушек
 */
var girlNames;


/**
 * [Array<String>] Имена всех штатов, в которых живут учащиеся (без повторений!)
 */
var states;


/**
 * [Array<String>] Имена всех совершеннолетних из штата California
 */
var californians;


/**
 * [Number] Средний бал учащихся из Аляски, с именем начинающимся на 'S'
 */
var alaskaSMeanGread;




