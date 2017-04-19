/**
 * Created by ntishkevich on 19.04.2017.
 */
function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);