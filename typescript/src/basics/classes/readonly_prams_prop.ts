/**
 * Created by ntishkevich on 21.04.2017.
 */


class Octocat {
    readonly name: string;
    private numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

let octocat = new Octocat('Octobi Wan Catnobi');
octocat.name = 'Catoctopus'; // error! name is readonly.





class Octocat {
    private numberOfLegs: number = 8;
    constructor (public readonly name: string) {
    }
}

let octocat = new Octocat('Octobi Wan Catnobi');
octocat.name = 'Catoctopus'; // error! name is readonly.


class Developer {
    constructor(public name: string, readonly skills: Array<string>) {
    }
}
let misha = new Developer('Misha', ['ruby', 'rails', 'sass']);