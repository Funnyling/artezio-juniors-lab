/**
 * @author ntishkevich
 */
function setUpSelectElement(options) {
    var width = options.width || 250;
    var height = options.height || 50;
    var elementClass = options.elementClass || 'form-control';
    //...
}

var anotherOptions = {
    height: 40
};

// Сравните вызов функции
setUpSelectElement(anotherOptions);
setUpSelectElement(null, 40, null);

anotherOptions.width = 200;
setUpSelectElement(anotherOptions);