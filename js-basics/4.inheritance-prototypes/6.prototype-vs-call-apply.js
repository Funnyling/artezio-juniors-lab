/**
 * @author ntishkevich
 */

//Prototype
function Animal(name, canFly) {
    var localMessage = 'Магия дружбы!';
    this.name = name;
    this.canFly = canFly;
}
Animal.prototype.fly = function () {
    console.log(this.name + (this.canFly ? ' может летать.' : ' не может летать') + localMessage);

};
function MagicPony(name, magicSkill) {
    this.name = name;
    this.magicSkill = magicSkill;
    this.canFly = true;
}

MagicPony.prototype = Object.create(Animal.prototype);
MagicPony.prototype.constructor = MagicPony;
var twilightSparkle = new MagicPony('Сумеречная Искорка', 'Тяжёлое заклинание');
console.log(twilightSparkle.name, twilightSparkle.magicSkill);
twilightSparkle.fly();

// Call "inheritance"
function Animal(name, canFly) {
    var localMessage = 'Магия дружбы!';
    this.name = name;
    this.canFly = canFly;
    this.fly = function () {
        console.log(this.name + (this.canFly ? ' может летать.' : ' не может летать') + localMessage);
    };
}

function MagicPony(name, magicSkill) {
    Animal.call(this, name, true);
    this.magicSkill = magicSkill;
}

var twilightSparkle = new MagicPony('Сумеречная Искорка', 'Тяжёлое заклинание');

console.log(twilightSparkle.name, twilightSparkle.magicSkill);
twilightSparkle.fly(); // Сумеречная Искорка может летать.