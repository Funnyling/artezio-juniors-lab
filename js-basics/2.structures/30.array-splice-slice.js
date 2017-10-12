/**
 * @author ntishkevich
 */
var cities = ['Минск', 'Брест', 'Гродно', 'Могилев'];
delete cities[1];

cities.splice(1, 1, 'Гомель');
cities.splice(1, 0, 'Брест');
cities.splice(-1, 0, 'Орша', 'Бобруйск');
cities.splice(-2, 1);

cities.slice(3, 4);
cities.slice(-1);