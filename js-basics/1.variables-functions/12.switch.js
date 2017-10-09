/**
 * @author ntishkevich
 */
var direction = findDirection();
switch(direction) {
    case 'left':
        alert('Налево');
        break;
    case 'right':
        alert('Направо');
        break;
    case 'forward':
        alert('Вперед');
        break;
    default:
        alert('Неверное направление');
}

function findDirection() {
    return 'left';
}