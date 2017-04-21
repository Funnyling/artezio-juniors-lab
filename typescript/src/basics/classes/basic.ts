/**
 * Created by ntishkevich on 21.04.2017.
 */
class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    meow(times: number): void {
        console.log(`${this.name} meows ${times} times.`);
    }
}

let cat: Cat = new Cat('Garfield');