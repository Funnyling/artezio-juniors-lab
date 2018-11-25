/**
 * @author ntishkevich
 */
var cities = ['Минск', 'Брест', 'Гродно', 'Могилев', 'Гомель'];

cities.map(function (city) {
    return {
        cityName: city,
        nameLength: city.length
    };
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

cities.every(function (city) {
    return city.indexOf('а') < 0;
});