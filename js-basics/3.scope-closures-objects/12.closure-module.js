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

// Форматирует дату в формате DD.MM.YYYY
function formatDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return day + '.' + month + '.' + year;
}

// Форматирует дату в формате MM/DD/=YYYY
function formatDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return month + '/' + day + '/' + year;
}

var formatEuDate = (function () {
    function formatDate(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }

    return formatDate;
})();

var formatUsDate = (function () {
    function formatDate(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return month + '/' + day + '/' + year;
    }

    return formatDate;
})();

(function () {
    function formatDate(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return month + '/' + day + '/' + year;
    }

    window.formatUsDate = formatDate;
})();

(function () {
    function formatDate(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }

    window.formatEuDate = formatDate;
})();