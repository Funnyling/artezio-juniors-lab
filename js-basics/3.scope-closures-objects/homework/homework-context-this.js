/**
 * Необходимо без выполнения кода и открытия его в редакторе
 * определить результат выполнения.
 *
 * Чему будет равно значение переменной result?
 */
function mystery(input) {
    var secret = 4;
    input += 2;
    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}

function mystery3(param) {
    function mystery4(bonus) {
        return param(6) + bonus;
    }
    return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

/**
 * Реализовать две функции repeat, sequence
 *
 * Напиши функцию создания генератора sequence(start, step).
 * Она при вызове возвращает другую функцию-генератор,
 * которая при каждом вызове дает число на 1 больше, и так до бесконечности.
 *
 * Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
 * Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
 * Генераторов можно создать сколько угодно.
 *
 * @param start - начальное число, с которого начинать отсчет.
*                 Начальное значение по умолчанию равно 0.
 * @param step -  шаг, задается при создании генератора.
 *                Шаг можно не указывать, тогда он будет равен одному
 *
 * @return function - вызове возвращает другую функцию-генератор,
 * которая при каждом вызове дает число начиная с start на step больше, и так до бесконечности
 */
function sequence(start, step) {
    //реализация
}

/**
 * Функция вызвает функцию func заданное число (times) раз
 *
 * @param func - функция, которая будет вызываться
 * @param times - сколько раз нужно вызвать функцию func
 */
function repeat(func, times) {
    //реализация
}

var generator = sequence(10, 3);
var generator2 = sequence(0, 2);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 0

repeat(generator2, 5); // [2, 4, 6, 8, 10]



/**
 * Реализовать конструктор для созадния гамбургером с описанными методами ниже.
 * Необходимо оформить с помощью шаблона "Модуль".
 *
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 */
function Hamburger(size, stuffing) {

    /**
     * Добавить начинку к гамбургеру. Можно добавить несколько
     * добавок, при условии, что они разные.
     *
     * Нельзя добавить начинку, если размер амбургера
     * Hamburger.SIZE_SMALL и кол-во начинку равно 5.
     *
     * Если размер гамбургера Hamburger.SIZE_LARGE,
     * можно добавлять не больше 10 начинку
     *
     * @param stuffing  Тип начинку
     */
    this.addStuffing = function (stuffing) {

    };

    /**
     * Добавить топпинг к гамбургеру. Можно добавить несколько,
     * при условии, что они разные.
     *
     * @param topping  Тип топпинга
     */
    this.addTopping = function (topping) {

    };

    /**
     * Убрать топпинг, при условии, что он ранее был
     * добавлен.
     *
     * @param topping Тип топпинга
     */
    this.removeTopping = function (topping) {

    };

    /**
     * Узнать размер гамбургера
     * @return {Number} размер гамбургера
     */
    this.getSize = function () {

    };

    /**
     * Узнать начинку гамбургера
     * @return {Array} Массив добавленных начинок, содержит константы
     * Hamburger.STUFFING_*
     */
    this.getStuffing = function () {

    };

    /**
     * Получить список добавок
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     * Hamburger.TOPPING_*
     */
    this.getToppings = function () {

    };

    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    this.calculateCalories = function () {

    };

    /**
     * Узнать цену гамбургера
     * @return {Number} Цена гамбургера
     */
    this.calculatePrice = function () {

    };
}

/* Размеры, виды начинок и добавок
 * Можно добавить свои топпинги и начинки
 *
 * Размеры начинаются с SIZE_*
 * Начинки начинаются с STUFFING_*
 * Топпинги начинаются с TOPPING_*
 */
Hamburger.SIZE_SMALL = //...
Hamburger.SIZE_LARGE = //...
Hamburger.STUFFING_CHEESE = //...
Hamburger.STUFFING_SALAD = //...
Hamburger.STUFFING_POTATO = //...
Hamburger.TOPPING_MAYO = //...
Hamburger.TOPPING_SPICE = //...

// Пример использования

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавим из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// добавим картофель
hamburger.addStuffing(Hamburger.STUFFING_POTATO);

// спросим сколько там калорий
console.log('Калории: ', hamburger.calculateCalories());

// сколько стоит
console.log('Цена: ', hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?
console.log('Цена с соусом ', hamburger.calculatePrice());

// большой ли гамбургер получился?
console.log('Большой ли гамбургер? ', hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

console.log('Сколько топпингов добавлено ', hamburger.getToppings().length); // 1

