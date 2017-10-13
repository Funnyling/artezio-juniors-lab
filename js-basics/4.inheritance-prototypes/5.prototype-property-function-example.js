/**
 * @author ntishkevich
 */
function Animal(name, canFly) {
    this.name = name;
    this.canFly = canFly;
}
Animal.prototype.fly = function() {
    if (this.canFly) {
        console.log(this.name + ' может летать');
    } else {
        console.log(this.name + ' не может летать');
    }
};
function MagicPony(name, magicSkill) {
    this.name = name;
    this.magicSkill = magicSkill;
    this.canFly = true;
}

MagicPony.prototype = Object.create(Animal.prototype);
MagicPony.prototype.constructor = MagicPony;
var twilightSparkle = new MagicPony('Сумеречная Искорка',
    'Тяжёлое заклинание');
console.log(
    twilightSparkle.name,
    twilightSparkle.magicSkill
);
twilightSparkle.fly();