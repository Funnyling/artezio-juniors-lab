/**
 * @author ntishkevich
 */
function pushArgumentsToArray(a, b, c) {
    // this - объект, переданный в .call, .apply, .bind
    this.array = this.array || [];
    this.array.push(a, b, c);
}
var convertedArguments = {};
pushArgumentsToArray.call(convertedArguments, 1, 2, 3);
console.log(convertedArguments); // { array: [ 1, 2, 3 ] }

pushArgumentsToArray.apply(convertedArguments, ['a', 42, 666]);
console.log(convertedArguments); // { array: [ 1, 2, 3, 'a', 42, 666 ] }

var pushArgumentsToArrayBind = pushArgumentsToArray.bind(convertedArguments,
    'z', 'over', 9000);
pushArgumentsToArrayBind();
// { array: [ 1, 2, 3, 'a', 42, 666 , 'z', 'over', 9000 ] }
console.log(convertedArguments);