/**
 * @author ntishkevich
 */
/**
 * noinspection JSDuplicatedDeclaration
 */

function theBridgeOfHoistingDoom() {
    var sword,
        dwarf,
        ring,
        fall;

    function fellowship() {
        return "friends";
    }
    sword = "sting";
    dwarf = function() {
        return "axe";
    };
    fall = "Fly you fools!";
    fellowship = function() {
        return "broken";
    };
    ring();
    return sword;
}

console.log(theBridgeOfHoistingDoom());


function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.sayGreetings = function () {
        console.log(this.name + ' says "Hello!"');
    };

    this.greet = function (response) {
        this.sayGreetings(); /// ?
        response();
    };
}

var steve = new Person('steve', 'M');
var peter = new Person("Peter", 'M');

peter.greet(steve.sayGreetings);

function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.sayGreetings = function () {
        console.log(this.name + ' says "Hello!"');
    };

    this.greet = function (response) {
        (function () {
            this.sayGreetings(); // ???
        })();
        response();
    };
}
var steve = new Person('Steve', 'M');
var peter = new Person("Peter", 'M');

peter.greet(steve.sayGreetings);

var steve = new Person('Steve', 'M');
var peter = new Person("Peter", 'M');

peter.greet(steve.sayGreetings);

function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.sayGreetings = function (callBack) {
        if (callBack) {
            callBack();
        } else {
            console.log(this.name + ' says "Hello!"');
        }
    };

    this.greet = function (person) {
        var callBack = function () {
            console.log(person.name + ' greets ' + this.name); // ???
        };
        this.sayGreetings(callBack);
    };
}
var steve = new Person('Steve', 'M');
var peter = new Person('Peter', 'M');

peter.greet(steve);

function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.sayGreetings = function () {
        console.log(this.name + ' says "Hello!"');
    };

    this.greet = function (response) {
        var _this = this; // ??
        (function () {
            _this.sayGreetings();
        })();
        response();
    };

    this.greet = function (person) {
        var self = this; // ??
        var callBack = function () {
            console.log(person.name + ' greets ' + self.name);
        };
        this.sayGreetings(callBack);
    };
}

function getProp() {
    return this.prop;
}

window.prop = 'Я - window';
var obj = {prop: 'Я - obj', getProp: getProp };

getProp();

obj.getProp();

getProp.apply(obj);

getProp.call(obj);

getProp.call();

var obj = {};

obj.myMethod = function () {
    console.log(this); // this = `obj`
};

obj.myMethod();

var obj = {};
obj.myMethod = function () {
    console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // window object :O!!!
    }, 100);
};
obj.myMethod();

var obj = {};
obj.myMethod = function () {
    console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // this = obj
    }.bind(this), 100);
};
obj.myMethod();

var obj = {};
obj.myMethod = function () {
    var that = this;
    console.log(this); // this = obj
    setTimeout(function () {
        console.log(that); // that (this) = obj
    }, 100);
};
obj.myMethod();


// crazy stuff
var obj = {};
obj.myMethod = function () {
    console.log(this);
    setTimeout(function () {
        console.log(this);
        setTimeout(function () {
            console.log(this);
            setTimeout(function () {
                console.log(this);
                setTimeout(function () {
                    console.log(this);
                }.bind(this), 100); // bind
            }.bind(this), 100); // bind
        }.bind(this), 100); // bind
    }.bind(this), 100); // bind
};
obj.myMethod();

























































(function () {
    function theBridgeOfHoistingDoom() {
        var sword = undefined;
        var dwarf = undefined;
        var fall = undefined;
        var ring = undefined;
        function fellowship() {
            return "friends";
        }
        sword = "sting";
        dwarf = function() {
            return "axe";
        }
        fall = "Fly you fools!";
        fellowship = function() {
            return "broken";
        }
        ring();
        return sword;
    }
})();