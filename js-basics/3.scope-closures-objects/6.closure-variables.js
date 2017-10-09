/**
 * @author ntishkevich
 */
var globalMessage = 'It is a global message';

function repeatMessage(count) {
    for (var i = 0; i < count; i++) {
        alert(globalMessage);
    }
}
repeatMessage(2);

globalMessage = 'New message';

repeatMessage(2);