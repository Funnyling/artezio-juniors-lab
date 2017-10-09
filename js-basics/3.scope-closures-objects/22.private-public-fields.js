/**
 * @author ntishkevich
 */
function MyConstructor(constructorParam) {
    var localVar = 'This is local';
    this.publicVar = 'This is public';

    function localFunc () {
        //...
    }

    this.publicFunc = function () {};
}

var myObject = new MyConstructor();
myObject.publicVar;
myObject.publicFunc();
myObject.localVar; // undefined
myObject.localFunc(); // TypeError: is not a function