/**
 * @author ntishkevich
 */
var cities = ['Минск', 'Брест', 'Гродно', 'Могилев'];

cities.map(function (city) {
    return city.toUpperCase();
});

cities.forEach(function (city) {
    console.log(city);
});

cities.filter(function (city) {
    return city === 'Могилев';
});

cities.some(function (city) {
    return city[0] === 'Г';
});