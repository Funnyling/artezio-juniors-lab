/**
 * @author ntishkevich
 */
function Animal(name, canFly) {
    this.name = name;
    this.canFly = canFly;
    this.fly = function () {
        if (this.canFly) {
            console.log(this.name + ' может летать.');
        } else {
            console.log(this.name + ' не может летать');
        }
    };
}

function MagicPony(name, magicSkill) {
    Animal.call(this, name, true);
    this.magicSkill = magicSkill;
}

var twilightSparkle = new MagicPony('Сумеречная Искорка',
    'Тяжёлое заклинание');

console.log(
    twilightSparkle.name,
    twilightSparkle.magicSkill
);
twilightSparkle.fly(); // Сумеречная Искорка может летать.
