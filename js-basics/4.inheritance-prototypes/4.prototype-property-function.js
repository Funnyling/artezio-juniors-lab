/**
 * @author ntishkevich
 */
function Parent(value) {
    this.value = value;
}

Parent.prototype.parentField = 42;

function Child(value, childField) {
    this.value = value;
    this.childField = childField;
}

Child.prototype = Object.create(Parent.prototype);
var child = new Child(11, true);
console.log(child.parentField); // 42


