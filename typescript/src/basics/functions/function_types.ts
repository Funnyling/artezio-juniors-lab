/**
 * Created by ntishkevich on 21.04.2017.
 */
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {
    return x + y;
};

let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number) { return x + y; };

let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) {
        return x + y;
    };