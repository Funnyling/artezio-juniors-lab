/**
 * @author ntishkevich
 */
function foo() {
    bar();
    var number = 42;
    return number;
    var n = 15;
}

function bar() {

}

function foo() {
    var number;
    var n;
    bar();
    number = 42;
    return number;
    n = 15;
}