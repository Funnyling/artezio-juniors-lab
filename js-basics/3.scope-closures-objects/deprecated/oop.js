/**
 * @author ntishkevich
 * @version 19.01.2017
 * noinspection JSDuplicatedDeclaration
 */
(function () {
    myVariable = 'global variable';
    var localVariable = 'localVariable';

    window.myVariable;
    window.localVariable;

    window.Number.NaN;
    window.Infinity;
    window.isNaN();

    var importantFeature = function (importantValue) {
        // делаем что-то важное
        return 42;
    }

    var importantFeature = 'Это важная фича';


    (function () {
        function greet(name) {
            // LexicalEnvironment = { name: 'Кадгар', greetings: undefined }
            var greetings = 'Hello, ' + name;

            // LexicalEnvironment = { name: 'Кадгар', greetings: 'Hello, Кадгар' }

            console.log(greetings);
        }

        greet('Кадгар');


        var globalMessage = 'It is a global message';

        function repeatMessage(count) {
            for (var i = 0; i < count; i++) {
                console.log(globalMessage);
            }
        }
        repeatMessage(2);

        globalMessage = 'New message';

        repeatMessage(2);


        function battleCry(count, message) {
            function prettifyMessage () {
                return message.toUpperCase();
            }

            for (var i = 0; i < count; i++) {
                console.log(prettifyMessage());
            }
        }

        battleCry(2, 'За Лордерон! За Альянс!');


        function doTaxes(income, customerName) {
            var taxDeduction = 500;
            function mafiaSpecial(income) {
                return income * 0.05 - taxDeduction * 2;
            }
            return function () {
                var yourTax;
                if (customerName != 'God Father') {
                    yourTax = income * 0.05 - taxDeduction;
                } else {
                    yourTax = mafiaSpecial(income);
                }
                return yourTax;
            };
        }
        //Эквивалентные вызовы
        var godGatherTaxes = doTaxes(50000, 'God Father')();
        var doGodFatherTaxes = doTaxes(50000, 'God Father');
        godGatherTaxes = doGodFatherTaxes();



        function foo() {
            bar();
            var number = 42;
            return number;
            var n = 15;
        }

        function foo() {
            var number;
            var n;
            bar();
            number = 42;
            return number;
            n = 15;
        }

        function mystery() {
            var secret = 6;
            function mystery2(multiplier) {
                multiplier *= 3;
                return secret * multiplier;
            }
            return mystery2;
        }

        var hidden = mystery();
        var result = hidden(3);


        function mystery(input) {
            var secret = 5;
            function mystery2(multiplier) {
                multiplier *= input;
                return secret * multiplier;
            }
            return mystery2;
        }

        var hidden = mystery(4);
        var result = hidden(2);

        var message = 'Hello, Window';

        function getPrintFunction() {
            var message = 'Hello, Function';
            return new Function('', 'return message;');
        }

        var printedMessage = getPrintFunction()();

        'string'.toLocaleString();

        false.toString();

        [1, 2, 3].toString();

        2.toString();

        2..toString();

        2 .toString();

        (2).toString();

        function Singer(name, album) {
            this.name = name;
            this.album = album;
        }

        var pinkGuy =
            new Singer('Pink Guy', 'Pink Season');
        console.log(pinkGuy);
        //{name: 'Pink Guy', phrase: 'Pink Season'}

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


        function MyConstructor(constructorParam) {
            var localVar = 'This is local';
            this.publicVar = 'This is public';

            function localFunc () {
                //...
            }

            this.publicFunc = function () {};
        }

        var myObject = new MyConstructor();
        myObject.publicVar;
        myObject.publicFunc();
        myObject.localVar; // undefined
        myObject.localFunc(); // TypeError: is not a function


    })();

    function checkStringLength(str) {
        numberTypeAction(
            str.length,
            function () {
                alert('String "' + str + '" has even number of characters');
            },
            function () {
                alert('String "' + str + '" has odd number of characters');
            }
        );
    }

    function numberTypeAction(number, onEven, onOdd) {
        if (number % 2) {
            onOdd();
        } else {
            onEven();
        }
    }

    checkStringLength('Hello, World!');


    function Cook(cookName, mealReqiuredTime) {
        var REQUIRED_TIME = mealReqiuredTime;
        this.cookName = cookName;

        function calcRemainingTime(wastedTime) {
            return REQUIRED_TIME - wastedTime;
        }

        this.cookSausages = function() {
            for (var i = 1; i <= REQUIRED_TIME; i++) {
                if(calcRemainingTime(i) > 0) {
                    console.log(calcRemainingTime(i)
                        + ' мин., Турецкий');
                } else {
                    console.log('Что там с сосисками, '
                        + this.cookName + '?');
                    console.log('5 минут, Турецкий');
                }
            }
        };
    }

    var charlie = new Cook('Чарли', 4);
    charlie.REQUIRED_TIME; // undefined
    charlie.calcRemainingTime(42);
    // TypeError: undefined is not a function
    console.log('Что там с сосисками, ' +
        charlie.cookName + '?');
    charlie.cookSausages();
    //Что там с сосисками, Чарли?
    //3 мин., Турецкий
    //2 мин., Турецкий
    //1 мин., Турецкий
    //Что там с сосисками, Чарли?
    //5 минут, Турецкий



    (function() {

        // глобальная переменная нашего скрипта
        var message = "Привет";

        // функция для вывода этой переменной
        function showMessage() {
            alert( message );
        }

        // выводим сообщение
        showMessage();

    })();

    var showMessages = (function() {

        // глобальная переменная нашего скрипта
        var message = "Привет";

        // функция для вывода этой переменной
        function showMessage() {
            alert( message );
        }

        return showMessage

    })();

    // выводим сообщение
    showMessages();


    this; // window

    function func() {
        this; // window
    }

    var timer = {startTime: 0};
    timer.start = function (end) {
        while(this.startTime < end) {
            this.startTime++;
            //объект, у которого вызываем метод
            this;
        }
    };

    function Person(name, gender) {
        // Может означать что-то другое
        this;
        this.name = name;
        this.gender = gender;
    }

    function pushArgumentsToArray(a, b, c) {
        // this - объект, переданный в .call, .apply, .bind
        this.array = this.array || [];
        this.array.push(a, b, c);
    }
    var convertedArguments = {};
    pushArgumentsToArray.call(convertedArguments, 1, 2, 3);
    console.log(convertedArguments); // { array: [ 1, 2, 3 ] }

    pushArgumentsToArray.apply(convertedArguments, ['a', 42, 666]);
    console.log(convertedArguments); // { array: [ 1, 2, 3, 'a', 42, 666 ] }

    var pushArgumentsToArrayBind = pushArgumentsToArray.bind(convertedArguments,
        'z', 'over', 9000);
    pushArgumentsToArrayBind();
    // { array: [ 1, 2, 3, 'a', 42, 666 , 'z', 'over', 9000 ] }
    console.log(convertedArguments);


})();