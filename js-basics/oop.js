/**
 * @author ntishkevich
 * @version 19.01.2017
 *
 */
    myVariable = 'global variable';
    var localVariable = 'localVariable';

    window.myVariable;
    window.localVariable;

    window.Number.NaN;
    window.Infinity;
    window.isNaN();


    (function () {

        'string'.toLocaleString();

        false.toString();

        [1, 2, 3].toString();

        2.toString();

        2..toString();

        (2).toString();

        function Singer(name, album) {
            this.name = name;
            this.album = album;
        }

        var pinkGuy = new Singer('Pink Guy', 'Pink Season');
        console.log(pinkGuy); //{name: 'Pink Guy', phrase: 'Pink Season'}

        var pilot = {
            name: 'Steve',
            age: 28,
            gender: 'male'
        };

        pilot.doBarrelRoll = function() {
            console.log('Barrel roll');
        };

        pilot.doBarrelRoll();


        var singer = {
            name: 'Pink Guy',
            album: 'Pink Season'
        };

        singer['singSong'] = function(songName) {
            console.log('The next song is ' + songName
                + '. NNNNNNYYYYYYEEEESSSS');
        };

        singer['singSong']('Gays 4 Donald Trump');


        /*function Robot(name, favoriteDrink, favoritePhrase) {
            var newInstance = {};
            newInstance.name = name;
            newInstance.favoriteDrink = favoriteDrink;
            newInstance.favoritePhrase = favoritePhrase;
            return newInstance;
        }
        var bender = new Robot('Bender', 'Beer',
            'Bite my shiny metal ass');*/

        /*function Robot(name, favoriteDrink, favoritePhrase) {
            this.name = name;
            this.favoriteDrink = favoriteDrink;
            this.favoritePhrase = favoritePhrase;
        }

        var bender = new Robot('Bender', 'Beer',
            'Bite my shiny metal ass');
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
        var bender = new Robot('Bender', 'Beer',
            'Bite my shiny metal ass');
        bender.drinkFavoriteDrink();
        bender.sayFavoritePhrase();



    })();