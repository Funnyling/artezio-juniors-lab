/**
 * Created by ntishkevich on 21.04.2017.
 */
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    move(metres: number = 0): void {
        console.log(`${this.name} moved ${metres}m.`);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(metres: number): void {
        console.log('Galloping...');
        super.move(metres);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(metres: number = 2): void {
        console.log('Slithering...');
        super.move(metres);
    }
}

let snake = new Snake('Python');
let animal: Animal = new Horse('Tommy');

snake.move();
animal.move(34);