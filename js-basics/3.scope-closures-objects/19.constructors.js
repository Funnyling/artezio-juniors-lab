/**
 * @author ntishkevich
 */
function Robot(name, favoriteDrink, favoritePhrase) {
    var newInstance = {};
    newInstance.name = name;
    newInstance.favoriteDrink = favoriteDrink;
    newInstance.favoritePhrase = favoritePhrase;
    return newInstance;
}

var bender = new Robot('Bender', 'Beer',
    'Bite my shiny metal ass');