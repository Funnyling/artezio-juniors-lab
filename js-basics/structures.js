    /**
     * @author ntishkevich* @version 17.01.2017
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

    })();

