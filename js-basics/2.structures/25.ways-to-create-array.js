/**
 * @author ntishkevich
 */
var allTypes = [true, 'string', 3.14, 42,
    function(){}, {name: 'John Wick'}, []];

allTypes[5].name;

var newArray = new Array('Минск', 'Брест', 'Гродно', 'Могилев');
newArray[0];

newArray = new Array(42);
newArray[0];