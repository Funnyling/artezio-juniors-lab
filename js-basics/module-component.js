/*
 script.js
 */
document.addEventListener('DOMContentLoaded', function () {
    var sizeSelector = new BurgerSizeSelector();

    sizeSelector.onSizeSelect(sizeSelected);

    function sizeSelected(size) {
        var shop = new BurgerShop(size);
        shop.onBuy(function () {
            var bill = new Bill(shop.getHamburger());
            bill.setCount(shop.getCount());
            bill.show();
        });
    }
});

/**
 * burger-size-selector.js
 * @constructor
 */
function BurgerSizeSelector() {}
BurgerSizeSelector.prototype.onSizeSelect = function (callback) {};

/**
 * burger-shop.js
 * @param size
 * @constructor
 */
function BurgerShop(size) {
    var infoBlock = new InfoBlock(this.getHamburger());
    var toppingComponent;
    var stuffingComponent;
    var counterComponent;
}
BurgerShop.prototype.getHamburger = function () {};
BurgerShop.prototype.getCount = function () {};

/**
 * bill.js
 * Чек
 * @param hamburger
 * @constructor
 */
function Bill(hamburger) {}
/**
 * Установить количество
 * @param count
 */
Bill.prototype.setCount = function (count) {};
/**
 * Показать на экране
 */
Bill.prototype.show = function () {};


/**
 * info-block.js
 * Блок с информацией о гамбургере
 * @param hamburger
 * @constructor
 */
function InfoBlock(hamburger) {

    var infSize = document.querySelector('.infSize');
    var infToppingsCount = document.querySelector('.infToppingsCount');
    var infStuffingsCount = document.querySelector('.infStuffingsCount');
    var infCalories = document.querySelector('.infCalories');
    var infPrise = document.getElementById('infPrise');
    infSize.textContent = hamburger.getSize().name;

    this.update = function () {
        infToppingsCount.textContent = hamburger.getToppings().length;
        infStuffingsCount.textContent = hamburger.getStuffings().length;
        infCalories.textContent = hamburger.calculateCalories();
        var currentPrise = hamburger.calculatePrice();
        infPrise.textContent = '$' + currentPrise.toFixed(2);
    };

    this.update();
}
