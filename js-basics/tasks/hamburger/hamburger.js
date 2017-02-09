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


var Hamburger = (function () {
    function Hamburger (size, stuffing) {
        this.arrayStaffing = [];
        this.arrayTopping = [];
        this.arrayStaffing.push(stuffing);
        this.size = size;
    }

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
    Hamburger.prototype.addStuffing = function (stuffing) {
        if (this.arrayStaffing.length <= this.size.size &&
            this.arrayStaffing.indexOf(stuffing) === -1) {
            this.arrayStaffing.push(stuffing);
        }
    };

    /**
     * Добавить топпинг к гамбургеру. Можно добавить несколько,
     * при условии, что они разные.
     *
     * @param topping  Тип топпинга
     */
    Hamburger.prototype.addTopping = function (topping) {
        if ( this.arrayTopping.indexOf(topping) === -1 ) {
            this.arrayTopping.push(topping);
        }
    };

    /**
     * Убрать топпинг, при условии, что он ранее был
     * добавлен.
     *
     * @param topping Тип топпинга
     */
    Hamburger.prototype.removeTopping = function (topping) {
        var indexTopping = this.arrayTopping.indexOf(topping);

        if (indexTopping !== -1) {
            this.arrayTopping.splice(indexTopping, 1);
        }
    };

    Hamburger.prototype.removeStuffing = function (stuffing) {
        var indexStuffing = this.arrayStaffing.indexOf(stuffing);

        if (indexStuffing !== -1) {
            this.arrayStaffing.splice(indexStuffing, 1);
        }
    };

    /**
     * Узнать размер гамбургера
     * @return {Number} размер гамбургера
     */
    Hamburger.prototype.getSize = function () {
        return this.size;
    };

    /**
     * Узнать начинку гамбургера
     * @return {Array} Массив добавленных начинок, содержит константы
     * Hamburger.STUFFING_*
     */
    Hamburger.prototype.getSuffring = function () {
        return this.arrayStaffing;
    };

    /**
     * Получить список добавок
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     * Hamburger.TOPPING_*
     */
    Hamburger.prototype.getToppings = function () {
        return this.arrayTopping;
    };

    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    Hamburger.prototype.calculateCalories = function () {
        return this.arrayStaffing.concat(this.arrayTopping).map(function (a) {
            return a.calories;
        }).reduce(function (a, b) {
            return a + b;
        });
    };

    /**
     * Узнать цену гамбургера
     * @return {Number} Цена гамбургера
     */
    Hamburger.prototype.calculatePrice = function () {
        return this.arrayStaffing.concat(this.arrayTopping).map(function (a) {
            return a.price;
        }).reduce(function (a, b) {
            return a + b;
        });
    };
    /* Размеры, виды начинок и добавок
     * Можно добавить свои топпинги и начинки
     *
     * Размеры начинаются с SIZE_*
     * Начинки начинаются с STUFFING_*
     * Топпинги начинаются с TOPPING_*
     */

    Hamburger.SIZE_SMALL = {calories: 4, price: 2, size: 5};
    Hamburger.SIZE_LARGE = {calories: 7, price: 4, size: 10};
    Hamburger.STUFFING_CHEESE = {calories: 12, price: 4};
    Hamburger.STUFFING_SALAD = {calories: 3, price: 3};
    Hamburger.STUFFING_POTATO = {calories: 8, price: 5};
    Hamburger.TOPPING_MAYO = {calories: 7, price: 2};
    Hamburger.TOPPING_SPICE = {calories: 6, price: 3};

    return Hamburger;
})();

/* Размеры, виды начинок и добавок
 * Можно добавить свои топпинги и начинки
 *
 * Размеры начинаются с SIZE_*
 * Начинки начинаются с STUFFING_*
 * Топпинги начинаются с TOPPING_*
 */

/*
 // Пример использования

 // маленький гамбургер с начинкой из сыра
 // 1
 // добавим из майонеза
 var hamburger = new Hamburger (Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
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

 console.log('Сколько топпингов добавлено ', hamburger.getToppings().length);


 var hamburger2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);

 // добавим приправу
 hamburger2.addTopping(Hamburger.TOPPING_SPICE);

 // добавим картофель
 hamburger2.addStuffing(Hamburger.STUFFING_POTATO);

 // спросим сколько там калорий
 console.log('Калории: ', hamburger2.calculateCalories());

 // сколько стоит
 console.log('Цена: ', hamburger2.calculatePrice());

 // я тут передумал и решил добавить еще приправу
 hamburger2.addTopping(Hamburger.TOPPING_SPICE);

 // А сколько теперь стоит?
 console.log('Цена с соусом ', hamburger2.calculatePrice());

 // большой ли гамбургер получился?
 console.log('Большой ли гамбургер? ', hamburger2.getSize() === Hamburger.SIZE_LARGE); // -> false

 // убрать добавку
 hamburger2.removeTopping(Hamburger.TOPPING_SPICE);

 console.log('Сколько топпингов добавлено ', hamburger2.getToppings().length); // 1*/