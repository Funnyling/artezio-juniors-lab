var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by ntishkevich on 19.04.2017.
 */
function greeter(person) {
    console.log("" + person);
    return "Hello, " + person;
}
var user = 'Steve';
document.body.innerHTML = greeter(user);
var a = { width: 124124, test: 124124 };
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
}(Animal));
function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
