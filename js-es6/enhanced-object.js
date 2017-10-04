/**
 * @author ntishkevich
 * @version 12.04.2017
 */

let x = 2, y = 3,
    o = {
        x: x,
        y: y
    };


let x = 2, y =3,
    o = {
        x,
        y
    };





let o = {
    x: function(){
        // ..
    },
    y: function(){
        // ..
    }
}

let o = {
    x() {
        // ..
    },
    y() {
        // ..
    }
}








runSomething({
    something: function something(x,y) {
        if (x > y) {
            return something(y, x);
        }

        return y - x;
    }
});

function runSomething(execObj) {
    return execObj.something(100, 4);
}


runSomething({
    something(x,y) {
        if (x > y) {
            return something(y, x);
        }

        return y - x;
    }
});

function runSomething(execObj) {
    return execObj.something(100, 4);
}






let o1 = {
    foo() {
        console.log("o1:foo");
    }
};

let o2 = {
    foo() {
        super.foo();
        console.log("o2:foo");
    }
};

Object.setPrototypeOf(o2, o1);

o2.foo(); // o1:foo o2:foo









let o = {};
o['f' + 'oo'] = 'bar';
o['b' + 'az'] = function () {
    console.log('bat');
};

let o = {
    ['f' + 'oo']: 'bar',
    ['b' + 'az']() {
        console.log('bat');
    }
}






let hasAccess = false;
let o = {
    _id: 'secret id'
};

Object.defineProperty(o, 'id', {
    get: function() {
        return hasAccess ? this._id : undefined;
    },
    set: function(id) {
        if (hasAccess) {
            this._id = id;
        } else {
            throw Error('Нет прав доступа');
        }
    }
});


let hasAccess = false;
let o = {
    _id: 'secret id',
    get id() {
        return hasAccess ? this._id : undefined;
    },

    set id(id) {
        if (hasAccess) {
            this._id = id;
        } else {
            throw Error('Нет прав доступа');
        }
    }
}