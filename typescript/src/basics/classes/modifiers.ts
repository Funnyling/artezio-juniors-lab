/**
 * Created by ntishkevich on 21.04.2017.
 */
/*class Animal {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }

    public move(metres: number) {
        console.log(`${this.name} moved ${metres}m.`);
    }
}*/

class Animal {
    public name: string;

    private constructor(theName: string) {
        this.name = theName;
    }

    public move(metres: number) {
        console.log(`${this.name} moved ${metres}m.`);
    }
}

let animal: Animal = new Animal('Rhino');