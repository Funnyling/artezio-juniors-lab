/**
 * @author ntishkevich
 */
const alert = console.log;

// Problem 1
function createTd(column) {

    //noinspection ES6ConvertVarToLetConst
    var td = $('<td>', {colspan: column.colspan});

    //noinspection ES6ConvertVarToLetConst,JSUnusedLocalSymbols
    var cssClass = 'btn-disabled';

    td.on('click', function (event) {
        //  ... code that uses cssClass...
        //noinspection JSUnresolvedVariable
        cssClass = event.target.data.cssClass;

        //noinspection JSUnresolvedVariable
        if (someCondition) {

            //noinspection ES6ConvertVarToLetConst,JSUnresolvedFunction
            var cssClass = doEvilThing();
        }

         // ... more code ...   
        //noinspection JSUnresolvedFunction
        applyClass(cssClass);
                  
    });
    return td;
}

////////////////////////////////////

// Problem 2
function printAsync() {
    //noinspection ES6ConvertVarToLetConst
    var fruits = ['Apple', 'Grape', 'Lemon', 'Pear', 'Quince'];

    //noinspection ES6ConvertVarToLetConst
    for(var i = 0; i < fruits.length; i++) {
        setTimeout(function () {
            //noinspection JSStringConcatenationToES6Template,JSReferencingMutableVariableFromClosure
            alert('Index: ' + i + ' , fruit: ' + fruits[i]);
        }, 1000);
    }
}
    
printAsync();

// Problem 1
function createTdFixed(column) {
    let td = $('<td>', {colspan: column.colspan});
    let cssClass = 'btn-disabled';

    td.on('click', function (event) {
        //  ... code that uses cssClass...
        cssClass = event.target.data.cssClass;
        //noinspection JSUnresolvedVariable
        if (someCondition) {
            //noinspection JSUnusedLocalSymbols,JSUnresolvedFunction
            let cssClass = doEvilThing();
        }

        // ... more code ...
        //noinspection JSUnresolvedFunction
        applyClass(cssClass);

    });
    return td;
}

// Problem 2
function printAsyncFixed() {
    const fruits = ['Apple', 'Grape', 'Lemon', 'Pear', 'Quince'];

    for(let i = 0; i < fruits.length; i++) {
        setTimeout(function () {
            alert('Index: ' + i + ' , fruit: ' + fruits[i]);
        }, 1000);
    }
}

//noinspection JSUnusedGlobalSymbols
const API_KEY = '33d4b480-3c3e-48f7-a5ff-12c0e406f817',
    SALT = '1650d8f',
    VERSION = '1.0.0_RC';

