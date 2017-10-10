/**
 * @author ntishkevich
 */
function Robot(name, favoriteDrink, favoritePhrase) {
    this.name = name;
    this.favoriteDrink = favoriteDrink;
    this.favoritePhrase = favoritePhrase;
    this.sayFavoritePhrase = function() {
        console.log(this.favoritePhrase);
    };
    this.drinkFavoriteDrink = function() {
        console.log(this.name + ' is drinking a '
            + this.favoriteDrink);
    };
}
var bender = new Robot('Bender', 'Beer', 'Bite my shiny metal ass');
bender.drinkFavoriteDrink();
bender.sayFavoritePhrase();