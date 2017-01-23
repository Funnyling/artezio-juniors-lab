/**
 * @author ntishkevich
 */
/**
 * noinspection JSDuplicatedDeclaration
 */
(function () {
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
})();


function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.sayGreetings = function () {
        console.log(this.name + ' says "Hello!"');
    };

    this.greet = function (response) {
        this.sayGreetings();
        response();
    };
}

var hanna = new Person('Hanna', 'F');
var peter = new Person("Peter", 'M');

peter.greet(hanna.sayGreetings); // window.name

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
var hanna = new Person('Hanna', 'F');
var peter = new Person("Peter", 'M');

peter.greet(hanna.sayGreetings);

var hanna = new Person('Hanna', 'F');
var peter = new Person("Peter", 'M');

peter.greet(hanna.sayGreetings);

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
            console.log(person.name + ' greets ' + this.name);
        };
        this.sayGreetings(callBack); // ???
    };
}
var hanna = new Person('Hanna', 'F');
var peter = new Person("Peter", 'M');

peter.greet(hanna);

function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.sayGreetings = function () {
        console.log(this.name + ' says "Hello!"');
    };

    this.greet = function (response) {
        var _this = this;
        (function () {
            _this.sayGreetings();
        })();
        response();
    };

    this.greet = function (person) {
        var self = this;
        var callBack = function () {
            console.log(person.name + ' greets ' + self.name);
        };
        this.sayGreetings(callBack);
    };
}

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