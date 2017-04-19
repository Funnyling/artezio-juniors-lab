/**
 * Created by ntishkevich on 17.04.2017.
 */
let isDone: boolean = false;

let age: number = 40;
let hex: number = 0xF00d;
let binary:number = 0b1010;
let octal: number = 0o744;

let fullName: string = 'Benedict Cumberbatch';
let msg: string = `
    Hello, my name is ${fullName}
    I'll be ${age + 1} years old this year`;

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ['Mango', 'Pear', 'Raspberry', 'Watermelon'];

let tuple: [string, number];
tuple = ['Hello', 42];
tuple = [42, 'Hello'];

tuple = ['Hello', 42, 100, 0, 'name'];

tuple[0].substr(1);
tuple[1].substr(1); // error substr does not exist on type number

tuple[3] = 'world'; // OK, 'string' может быть присвоен 'string | number‘
tuple[5].toString(); // OK, 'string' и 'number' оба имеют 'toString‘
tuple[6] = true; // Ошибка, 'boolean' не 'string | number'

let foo: undefined = undefined;
let bar: null = null;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // ok, это определенно boolean


let list: any[] = [1, true, "free"];

list[1] = 100;

let notSure: any = 4;
notSure.ifItExists(); // ifItExists может существовать на этапе исполнения
notSure.toFixed(); // метод toFixed существует (но компилятор не проверяет это)

let prettySure: Object = 4;
prettySure.toFixed(); //  Ошибка: Свойство 'toFixed' не существует у типа 'Object'.


function error(message: string): never {
    throw new Error(message);
}

// Предполагаемый тип возврата - never
function fail() {
    return error("Something failed");
}

// Функция возвращающая never имеет недостижимую точку возврата
function infiniteLoop(): never {
    while (true) {
    }
}

function greeter(person: string = 'Bill', msg: string = 'Hello'): void {
    console.log(`${msg},  ${person}`);
}
greeter('Steve');
greeter();

function greeter(person: string, msg?: string): void {
    console.log(`${msg = 'Hello'},  ${person}`);
}

greeter('Steve');

greeter('Steve', undefined);

function greeter(person: string, msg: string = 'Hello'): void {
    console.log(`${msg},  ${person}`);
}

let unusable: void = undefined;

// Нельзя присвоить ничего другого этим переменным!
let u: undefined = undefined;
let n: null = null;

let nullableString: string | null | undefined = null;

let neverVar: never = 'my string';

let neverVar: never;
let newString: string = neverVar; // error substr does not exist on type number

let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;