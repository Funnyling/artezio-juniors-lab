/**
 * @author ntishkevich
 */

var magicNumber = 0;

function complexCalculation(firstNum, secondNum) {
    return Math.pow(firstNum / magicNumber, 2) + Math.sin(secondNum);
}

var result = complexCalculation(-1231, 3981);
var anotherResult;
if (result) {
    anotherResult = magicNumber * result;
    console.log(result);
}