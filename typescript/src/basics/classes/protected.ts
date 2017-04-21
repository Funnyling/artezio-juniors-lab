/**
 * Created by ntishkevich on 21.04.2017.
 */
class Human {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Developer extends Human {
    private skills: Array<String>;
    constructor(name: string, skills: Array<String>) {
        super(name);
        this.skills = skills;
    }

    sendEmail(): void {
        console.log(`
            Hello, my  name is ${this.name}.
            My skills are ${this.skills.join(', ')}`
        );
    }
}

let misha = new Developer(
    'Misha', ['ruby', 'rails', 'sass']
);
misha.sendEmail();
console.log(misha.name);