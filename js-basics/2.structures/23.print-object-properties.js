/**
 * @author ntishkevich
 */

var strangeObject = {
    magicvalue: 42,
    '_': 'Странное свойство',
    'newObject': {
        '!мое_свойство': 15
    }
};

for (var p in strangeObject) {
    console.log('Свойство с именем ' + p +
        ' значение - ' + strangeObject[p]);
}