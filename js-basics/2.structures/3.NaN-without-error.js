/**
 * @author ntishkevich
 */

var htmlElement = {};
var anotherHtmlElement = {};
function calculateOffset(htmlElement) {
    // реализация расчета смещения
    return '150px';
}

function horizontalMove(htmlElement, offset) {
    // реализация перемещения на offset
    if (isNaN(offset)) {
        return;
    }
    htmlElement.posX = htmlElement.posX + offset;
}

horizontalMove(
    anotherHtmlElement,
    calculateOffset(htmlElement)
);

