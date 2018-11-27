/**
 * @author ntishkevich
 */

/**
 * @author ntishkevich
 */


function calculateOffset() {
    // реализация расчета смещения
    return '150px';
}

function verticalTransition(point, offset) {
    // реализация перемещения на значение offset
    if (isNaN(offset)) {
        return;
    }

    point.y = point.y + offset;
    console.log(point);
}
var point = {x: 0, y: 0};
var offset = +calculateOffset(); // получили значение `150px`

verticalTransition(point, offset);


