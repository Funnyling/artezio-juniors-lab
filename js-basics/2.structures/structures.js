/**
 * @author ntishkevich
 * @version 17.01.2017
 *
 */
    isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true

    isNaN(true);      // false
    isNaN(null);      // false
    isNaN(37);        // false
    // strings
    isNaN("37");      // false: "37" преобразуется в число 37 которое не NaN
    isNaN("37.37");   // false: "37.37" преобразуется в число 37.37 которое не NaN
    isNaN("");        // false: пустая строка преобразуется в 0 которое не NaN
    isNaN(" ");       // false: строка с пробелом преобразуется в 0 которое не NaN
    // Даты
    isNaN(new Date());                // false
    isNaN(new Date().toString());     // true

    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(0);         // true
    isFinite(2e64);      // true

    (function () {

        function convertToRgb(hex) {
            var rgb = /^(\w{2})(\w{2})(\w{2})$/.exec(hex);
            return rgb.splice(1);
        }

        var htmlElemnt = {};
        var anotherHtmlElemnt = {};
        function calculateOffset(htmlElemnt) {
            //реализанция расчет смещения
            return +'150px';
        }

        function move(htmlElemnt, offset) {
            //реализация перемещения
        }

        var offset = calculateOffset(htmlElemnt);
        if (!isNaN(offset)) {
            move(anotherHtmlElemnt, offset);
        }


        var magicNumber = 0;

        function complexCalculation(firstNum, secondNum) {
            return Math.pow(firstNum / magicNumber, 2) + Math.sin(secondNum);
        }

        var result = complexCalculation(-1231, 3981);
        var anotherResult;
        if (isFinite(result)) {
            anotherResult = magicNumber * result;
            console.log(result);
        }

        magicNumber = 42;

        magicNumber.toString(16);
        magicNumber.toString('16');

        var hex = 0xff; // кол-во красного цвета в 16ом формате
        hex.toString(10);

        var redColorHex = 'ff0000'; // red color
        var rgb = convertToRgb(redColorHex),
            red = parseInt(rgb[0], 16),
            green = parseInt(rgb[1], 16),
            blue = parseInt(rgb[2], 16);


        var hugeSalary = 10000000;
        hugeSalary.toLocaleString();

        var pi = 3.14159265358;

        Math.floor(pi);
        Math.ceil(pi);
        Math.round(pi);

        pi.toFixed(4);

        Math.floor(pi * 1000) / 1000;
        Math.ceil(pi * 1000) / 1000;
        Math.round(pi * 1000) / 1000;

        // Создает объект Date с текущей датой и временем
        var yesterday = new Date();

        // Создает объект Date, значение которого равно количеству миллисекунд (1/1000 секунды),
        // прошедших с 1 января 1970 года GMT+0.
        yesterday = new Date(1484769802411);

        // Если единственный аргумент – строка, используется вызов Date.parse
        yesterday = new Date('2017-01-18T18:00');
        yesterday = new Date('2017-01-18T18:00+03:00');

        // Дату можно создать, используя компоненты в местной временной зоне.
        // Для этого формата обязательны только первые два аргумента.
        // Отсутствующие параметры, начиная с hours считаются равными нулю, а date – единице.
        yesterday = new Date(2017, 1, 18, 20, 15, 44);

        // Метод Date.now() возвращает дату сразу в виде миллисекунд.
        yesterday = Date.now();

        var february29 = new Date(2017, 1, 29);

        var today = new Date();
        today.setSeconds(today.getSeconds() + 3600);

        today.setDate(1);
        today.setDate(0);
        today.setDate(-1);

        function sayHi() {
            for (var i = 0; i < arguments.length; i++) {
                alert('Hello, ' + anotherResult[i]);
            }
        }

        function sayHi() {
            alert('Hello ' + arguments.join(', '));
        }

        sayHi('Benedict', 'John', 'Mickle'); // Hello, Benedict ...

        function doTaxes(income, customerName, deduction) {
            var taxDeduction = deduction || 50,
                yourTax = income * 0.05 - taxDeduction;
            console.log(" Dear " + customerName + ", your tax is " + yourTax);
            return yourTax;
        }

        doTaxes(650, 'God Father', 500);

        doTaxes(350, 'Someone');

        doTaxes(350, 'Benedict', 0);


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



        var dogName = 'Лонг';
        dogName = "Циклон";
        dogName = new String('Дублон');
        dogName = String('Юджин');

        var developer = 'I\'m a developer',
            doctor = "I am a \"very good\" doctor",
            architector = "I'm\tan architector ",
            crab = ' (\\/)!_!(\\/)';

        dogName = 'Юджин\n';
        dogName.length;

        dogName.charAt(0);
        dogName[0];

        dogName.charAt(10);
        dogName[10];

        'Ваня' < 'Вася'
        'Витрина' < 'Витя'
        'Домашний' > 'Дом'

        'Дом' >= 'Дом'

        var stringTheory = 'Теория струн';

        stringTheory.substring(7, 12);
        stringTheory.substr(7, 5);
        stringTheory.slice(7, 12);

        stringTheory.substring(-6, 6);
        stringTheory.substring(12, 7);

        stringTheory.slice(-5);
        stringTheory.slice(-5, -2);

        var myObject = {};
        myObject = new Object();
        myObject = Object.create();

        var human = {
            name: 'Бенедикт Камбербэтч',
            age: 30,
            country: 'Великобритания'
        };

        human.home;
        human['job'];

        'country' in human;
        human.country === undefined

        'job' in human;
        human.job === undefined;

        delete human.country;
        delete human.home;

        var anotherHuman = {};
        anotherHuman.name = 'Роберт Оппенгеймер';
        anotherHuman.age = 62;
        anotherHuman.country = 'США';

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

        var concat = 'Метод concat()'.concat(' объединяет текст из двух',
            ' или более строк и ' ,
            'возвращает новую строку.');

        var concatWithPlus = 'Метод concat()' + ' объединяет текст из двух' +
                ' или более строк и ' + 'возвращает новую строку.';

        var cities = ['Минск', 'Брест', 'Гродно', 'Могилев'];
        cities.forEach(function (city) {
            city = city.toUpperCase();
        });

        delete cities[1];

        cities.splice(1, 1, 'Гомель');
        cities.splice(1, 0, 'Брест');
        cities.splice(-1, 0, 'Орша', 'Бобруйск');
        cities.splice(-2, 1);

        cities.slice(3, 4);
        cities.slice(-1);

        var str = cities.join(', ');

        var numbers = [1, 8, 9, 7, 10, 3, 6];
        numbers.sort();

        numbers.sort(function (a, b) {
            return a - b;
        });

        cities.map(function (city) {
            return city.toUpperCase();
        });

        cities.forEach(function (city) {
            console.log(city);
        });

        cities.filter(function (city) {
            return city === 'Могилев';
        });

        cities.some(function (city) {
            return city[0] === 'Г';
        });


        for (var i = 0; i < cities.length; i++) {
            console.log(cities[i]);
        }

        cities.push('Гомель');
        cities.pop();

        cities.shift();
        cities.unshift('Минск');

        cities.length;

        cities.length = 1;

        var allTypes = [true, 'string', 3.14, 42,
            function(){}, {name: 'John Wick'}, []];

        allTypes[5].name;

        var newArray = new Array('Минск', 'Брест', 'Гродно', 'Могилев');
        newArray[0];

        newArray = new Array(42);
        newArray[0];

        var citiesAsString = 'Минск, Брест, Гродно, Могилев';
        var array = citiesAsString.split(', ');


    })();

