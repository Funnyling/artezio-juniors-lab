/**
 * Created by ntishkevich on 21.04.2017.
 */

// function say(name: string, phrase: string): void;
//
// function say(name: string, times: number): void;
//
// function say(name: string, smth: any): void {
//     if(typeof smth === 'number') {
//         // number overload
//         console.log(`${name} meows ${smth.toString(8)} times.`)
//     } else {
//         // string overload
//         console.log(`${name}: ${smth}.`)
//     }
// }


function say(name: string, phrase: string): void;

function say(name: string, times: number): void;

function say(name: string, smth: number|string): void {
    if(typeof smth === 'number') {
        // number overload
        console.log(`${name} meows ${smth.toString(8)} times.`)
    } else {
        // string overload
        console.log(`${name}: ${smth}.`)
    }
}