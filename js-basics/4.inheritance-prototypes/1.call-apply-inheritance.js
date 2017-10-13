/**
 * @author ntishkevich
 */
function Parent(value) {
    this.value = value;
    this.parentField = 42;
}

function Child(value, childField) {
    Parent.call(this, value);
    this.childField = childField;
}

var child = new Child(11, true);
console.log(child.parentField); // 42