/**
 * @author ntishkevich
 */
var cities = ['Минск', 'Брест', 'Гродно', 'Могилев', 'Гомель'];

cities.map(function (city) {
    return {
        city: city.toUpperCase(),
        nameLength: city.length
    };
});

cities.reduce(function (cities, city) {
    cities[city] = {
        city: city,
        nameLength: city.length
    };
    return cities;
}, {});

cities.forEach(function (city) {
    console.log(city);
});

cities.filter(function (city) {
    return city[0] === 'Г';
});

cities.some(function (city) {
    return city.length > 5;
});

cities.some(function (city) {
    console.log(city);
    return city.length > 5;
});

cities.some(function (city) {
    console.log(city);
    return city.length > 20;
});


cities.every(function (city) {
    console.log(city);
    return city.indexOf('а') < 0;
});

cities.every(function (city) {
    console.log(city);
    return city.indexOf('а') >= 0;
});

cities.filter(function (city) {
        return city.length === 5;
    })
    .map(function (city) {
        return {
            city: city,
            firstChar: city.codePointAt(0)
        };
    });