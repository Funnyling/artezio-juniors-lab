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
    I'll be ${age + 1} years old this year
`;

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ['Mango', 'Pear', 'Raspberry', 'Watermelon'];

let tuple: [string, number];
tuple = ['Hello', 42];
// tuple = [42, 'Hello'];

tuple = ['Hello', 42, 100, 0, 'name'];

tuple[0].substr(1);
// tuple[1].substr(1);
tuple[6];

let foo: undefined = undefined;
let bar: null = null;