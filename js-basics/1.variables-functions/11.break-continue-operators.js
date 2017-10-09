/**
 * @author ntishkevich
 */
var sum = 0;
while (true) {
    var value = +prompt("Введите число", '');
    if (!value) break; // выходим из while
    sum += value;
}

var sum = 0;
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    sum += i;
}
