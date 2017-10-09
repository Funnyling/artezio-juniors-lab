/**
 * @author ntishkevich
 */
function battleCry(count, message) {
    function prettifyMessage () {
        return message.toUpperCase();
    }

    for (var i = 0; i < count; i++) {
        alert(prettifyMessage());
    }
}

battleCry(2, 'За Лордерон! За Альянс!');