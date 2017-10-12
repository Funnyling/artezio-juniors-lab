/**
 * @author ntishkevich
 */
var citiesAsString = 'Минск, Брест, Гродно, Могилев';
var array = citiesAsString.split(', ');

var cities = ['Минск', 'Брест', 'Гродно', 'Могилев'];
var str = cities.join(', ');

var numbers = [1, 8, 9, 7, 10, 3, 6];
numbers.sort();

numbers.sort(function (a, b) {
    return a - b;
});