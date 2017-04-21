/**
 * Created by ntishkevich on 21.04.2017.
 */
class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Human {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let animal = new Animal('Goat');
let cat = new Cat('Cat');
let employee = new Human('Bob');

animal = cat;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible
