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







let [a , [[b], c]] = [14, [[42], 88]];

console.log(a);
// 14
console.log(b);
// 42
console.log(c);
// 88









let [,,,fourth] = fruits;
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

{
let tmp = bar(),
    x = tmp.x,
    y = tmp.y,
    z = tmp.z;
}

{
let {x: x, y: y, z: z} = bar();
}

{
let {x, y, z} = bar();
}









{first} = fruits;

({first}) = fruits;

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

let { x, y } = returnMultipleValuesObject();

const temp = returnMultipleValuesObject();
let x = temp.foo;
let y = temp.bar;

