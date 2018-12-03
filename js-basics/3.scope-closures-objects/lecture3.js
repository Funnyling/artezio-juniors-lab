/**
 * @author ntishkevich
 * @version 01.12.2018
 */
if (month % 4 === 0) {
    var delta = Math.floor(sheepCount * 0.75);
    sheepCount -= delta;
} else if (sheepCount > 10000) {
    var delta = Math.floor(sheepCount * 0.5);
    sheepCount -= delta;
}
// ...

console.log(delta); // ???


function predictSheepCount() {
    var delta;
    // ...
    if (month % 4 === 0) {
        delta = Math.floor(sheepCount * 0.75);
        sheepCount -= delta;
    } else if (sheepCount > 10000) {
        delta = Math.floor(sheepCount * 0.5);
        sheepCount -= delta;
    }
    // ...
}


console.log(delta); // ReferenceError: delta is not defined

function predictSheepCont() {

}

if (month % 4 === 0) {
    function sellSheep(sheepCount) {
        return sheepCount - Math.floor(sheepCount * 0.75);
    }
    sellSheep(sheepCount)
} else if (sheepCount > 10000) {
    function sellSheep(sheepCount) {
        return sheepCount - Math.floor(sheepCount * 0.5);
    }
    sellSheep(sheepCount);
}

sellSheep(); // будет ли видна?

var myName = 'Nick';
console.log(window.myName);
console.log('Переменная \'myName\' является глобальной? ' + ('myName' in window));

function foo() {
    myName = 'Nick';
}
foo();
console.log(window.myName);
console.log('Переменная \'myName\' является глобальной? ' + ('myName' in window));

function main() {
    console.log('Функция из моего скрипта');
}

function main() {
    console.log('Функция из библиотеки');
}



function foo(baz) {
    xyz(baz);
    if (baz) {
        var bar = 100;
    } else {
        function xyz() {
            console.log(baz);
        }
        var abc = 50;
    }
}

function foo(baz) {
    function xyz() {
        console.log(baz);
    }

    var bar;
    var abc;
    xyz(baz);
    if (baz) {
        bar = 100;
    } else {
        abc = 50;
    }
}

function foo() {
    var b = 100;
    var console = {
        log: function (param) {
            alert(param);
        }
    };
    console.log(b);
}
foo();
greet[[Scope]] = window;