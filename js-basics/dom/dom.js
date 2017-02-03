/**
 * @author ntishkevich
 * @version 29.01.2017
 */
(function () {
    var myNavigator = navigator.userAgent;
    var curLocation = location.href;
    location.href = 'http://www.google.com';

    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM готов');
    });

    window.onload = function () {
        console.log('Window готов');
    };

    window.beforeunload = function () {
        console.log('До закрытия страницы готов');
    };


})();