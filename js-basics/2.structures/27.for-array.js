/**
 * @author ntishkevich
 */
var cities = ['Минск', 'Брест', 'Гродно', 'Могилев'];

for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
var array = [];
array[5] = 'foo';
for (var index in cities) {
    console.log(cities[index]);
}

for (var i = 0; i < array.length; i++) {
    console.log(cities[i]);
}