/**
 * Created by ntishkevich on 19.04.2017.
 */
function greeter(person: string) {
    console.log(`${person}`);
    return "Hello, " + person;
}

var user = 'Steve';

document.body.innerHTML = greeter(user);