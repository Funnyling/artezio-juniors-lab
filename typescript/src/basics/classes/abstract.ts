/**
 * Created by ntishkevich on 21.04.2017.
 */
abstract class Animal {
    constructor(public name: string) {
    }

    abstract voice(): void;
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    voice(): void {
        console.log(`${this.name}: Meow!`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    voice(): void {
        console.log(`${this.name}: Woof!`);
    }
}

let cat: Animal = new Cat('Cat');
cat.voice();

let dog: Animal = new Dog('Dog');
dog.voice();