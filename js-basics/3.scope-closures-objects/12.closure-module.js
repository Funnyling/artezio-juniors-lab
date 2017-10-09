/**
 * @author ntishkevich
 */

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