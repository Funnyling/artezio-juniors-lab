/**
 * @author ntishkevich
 */
function Animal(name, canFly) {
    this.name = name;
    this.canFly = canFly;
    this.canWalk = true;
}

Animal.prototype.fly = function() {
    console.log(this.name + (this.canFly ? ' может летать.' : ' не может летать'));
};

function MagicPony(name, magicSkill) {
    this.name = name;
    this.magicSkill = magicSkill;
    this.canFly = true;
}

MagicPony.prototype = Object.create(Animal.prototype);
MagicPony.prototype.constructor = MagicPony;

var twilightSparkle = new MagicPony('Сумеречная Искорка','Тяжелое заклинание'
);

for (var property in twilightSparkle) {
    if (twilightSparkle.hasOwnProperty(property)) {
        console.log(property); // name, magicSkill, canFly
    }
}