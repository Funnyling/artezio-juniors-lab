/**
 * @author ntishkevich
 */

function complexCalculation(firstNum, secondNum) {
    // реализация сожной логики расчета
    return Math.pow(firstNum / secondNum, 2) + Math.sin(secondNum);
}

var result = complexCalculation(-1231, 0);
if (isFinite(result)) {
    alert('Ваш психологический возраст ' + result);
}