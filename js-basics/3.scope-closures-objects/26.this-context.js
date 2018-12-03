/**
 * @author ntishkevich
 */

this; // window

function func() {
    this; // window
}

var felix = {
    name: 'Felix',
    meow: function () {
        console.log(this.name + ' мяукает.'); // this -> felix
    }
};

function Person(name, gender) {
    this.name = name;
    this; // новый объект
}

button.onclick = function () {
    this; // event.currentTarget
};

function Person(name) {
    this.name = name;

    this.getName = function () {
        return this.name;
    }
}

var foo = function (bar, baz) {
    console.log(bar, baz);
};

var wrappedFoo = foo.bind(null, 'Зафиксировали');
wrappedFoo(100);