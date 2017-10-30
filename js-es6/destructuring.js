/**
 * @author ntishkevich
 * @version 11.04.2017
 */
const fruits = ['Mango', 'Pear', 'Raspberry', 'Watermelon'];

// До деструктурирования
let first = fruits[0],
    second = fruits[1],
    third = fruits[2];

[first, second, third] = fruits;







let [a , [[b, [c]], d]] = [14, [[42, [55]], 88]];

console.log(a);
// 14
console.log(b);
// 42
console.log(c);
// 55
console.log(d);
// 88









let [first,,,fourth] = fruits;
console.log(fourth);

let [headFruit, ...restFruits] = fruits;
console.log(restFruits);












console.log([][0]);
// undefined

let [missing] = [];
console.log(missing);
// undefined








function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

let tmp = bar(),
    x = tmp.x,
    y = tmp.y,
    z = tmp.z;





let {x: x, y: y, z: z} = bar();
let {x, y, z} = bar();







let aa = 10, bb = 20;
let AA, BB;
let o = {x: aa, y: bb};
let {x: AA, y: BB} = o;

console.log(AA, BB);







var o = {};

[o.a, o.b, o.c] = foo();
({x: o.x, y: o.y, z: o.z} = bar());

console.log(o.a, o.b, o.c);		// 1 2 3
console.log(o.x, o.y, o.z);		// 4 5 6









var which = "x",
    o = {};

({[which]: o[which]} = bar());

console.log(o.x);








{x} = bar();

({x}) = bar();

let {wtf} = null;
// TypeError: у null нет свойств

({wtf} = NaN);
console.log(wtf);
// undefined







function returnMultipleValues() {
    return [1, 2];
}
let [foo, bar] = returnMultipleValues();


function returnMultipleValuesObject() {
    return {
        foo: 1,
        bar: 2
    };
}

let {foo: x, bar: y} = returnMultipleValuesObject();

const temp = returnMultipleValuesObject();
let x = temp.foo,
    y = temp.bar;








function removeBreakpoint({ url, line, column }) {
    // ...
}

let options = {
    url: '../destructuring.js',
    line: 70,
    column: 1
}
removeBreakpoint(options);


jQuery.ajax = function (url, {
                            async = true,
                            cache = true,
                            crossDomain = false,
                            // ... больше настроек
                        }) {
    // ... делаем что-то полезное
};
