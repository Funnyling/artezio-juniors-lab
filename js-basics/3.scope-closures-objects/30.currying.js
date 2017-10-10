/**
 * @author ntishkevich
 */

function multiply(a, b) {
    return a * b;
}

var double = multiply.bind(null, 2);

double(2); // 4
double(3); // 6

var triple = multiply.bind(null, 3);

triple(3); // 9
triple(4); // 12