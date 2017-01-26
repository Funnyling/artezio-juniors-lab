/**
 * @author ntishkevich
 * @version 22.01.2017
 */
(function () {
    var Color = (function () {
        'use strict';

        /*
         Example of hexColor: ['#00ff00', '336699'],
         */
        var _hexProcessor =  {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        };

        function Color(hexColor) {
            this.color = hexColor;
            this.hasLeadHash = hexColor[0] === '#';

            this.toRgb = function () {
                var hexColor = this.hasLeadHash ? this.color.substr(1, 6).toLowerCase() : this.color.toLowerCase();
                var bits = _hexProcessor.process(_hexProcessor.re.exec(hexColor));
                return _convertBitsToRgbArray(bits);
            }
        }

        function _convertBitsToRgbArray(bits) {
            var r = bits[0], g = bits[1], b = bits[2];
            r = (r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r);
            g = (g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g);
            b = (b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b);
            return [r, g, b];
        }

        Color.fromRgb = function (rgb, hasLeadHash) {
            var hexColor = rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16);
            return hasLeadHash ? '#' + hexColor : hexColor;
        };

        Color.mixRgbColors = function (firstRgb, secondRgb) {
            var firstColorRgb = firstRgb.toRgb();
            var secondColorRgb = secondRgb.toRgb();
            var newColorRgb = [];
            for (var i = 0; i < firstColorRgb.length; i++) {
                newColorRgb[i] = Math.round((firstColorRgb[i] + secondColorRgb[i]) / 2);
            }
            return Color.fromRgb(newColorRgb, firstRgb.hasLeadHash || secondColorRgb.hasLeadHash);
        };

        Color.VERSION = '1.0.0_RC';

        return Color;
    })();

    console.log(Color.VERSION);

    var aquamarineColor =
        new Color('#48d1cc');

    var whiteColor =
        new Color('#ffffff');

    var newColor = Color.mixRgbColors(
        aquamarineColor,
        whiteColor
    );

    console.log(newColor); // #a4e8e6

    function multiply(a, b) {
        return a * b;
    }

    var double = multiply.bind(null, 2);

    double(2);
    double(3);

    var triple = multiply.bind(null, 3);

    triple(3);
    triple(4);

    (function () {
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
    })();

    (function () {
        function Parent(value) {
            this.value = value;
            this.parentField = 42;
        }

        function Child(value, childField) {
            this.value = value;
            this.childField = childField;
        }

        Child.prototype = Object.create(Parent.prototype);
        var child = new Child(11, true);
        console.log(child.parentField); // 42
    })();

    (function () {
        function Parent(value) {
            this.value = value;
            this.parentField = 42;
        }

        function Child(value, childField) {
            this.value = value;
            this.childField = childField;
        }

        Child.prototype = 42;
        var child = new Child(11, true);
        console.log(child.parentField); // undefined
    })();

    (function () {
        function Animal(name, canFly) {
            var localMessage = 'А чего добился ты?';
            this.name = name;
            this.canFly = canFly;
            this.fly = function () {
                if (this.canFly) {
                    console.log(this.name + ' может летать. ' + localMessage);
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
        twilightSparkle.fly(); // Сумеречная Искорка может летать. А чего добился ты?
    })();

    (function () {
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

        twilightSparkle instanceof MagicPony;

        twilightSparkle instanceof Animal;

        twilightSparkle instanceof Object;

        twilightSparkle instanceof Array;

        [1, 2, 3] instanceof Array;

        [1, 2, 3] instanceof Number;

    })();

    (function () {
        function Animal(name, canFly) {
            this.name = name;
            this.canFly = canFly;
            this.canWalk = true;
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

        var twilightSparkle = new MagicPony(
            'Сумеречная Искорка',
            'Тяжелое заклинание'
        );

        for (var property in twilightSparkle) {
            if (twilightSparkle.hasOwnProperty(property)) {
                console.log(property); // name, magicSkill, canFly
            }
        }
    })();

    var Animal = class {
        constructor(name, canFly) {
            this.name = name;
            this.canFly = canFly;
        }

        fly() {
            if (this.canFly) {
                console.log(this.name + ' может летать');
            } else {
                console.log(this.name + ' не может летать');
            }
        }
    }

    var MagicPony = class extends Animal {
        constructor (name, magicSkill) {
            super(name, true);
            this.magicSkill = magicSkill;
        }
    }

    var twilightSparkle = new MagicPony(
        'Сумеречная Искорка',
        'Тяжелое заклинание'
    );

    for (var property in twilightSparkle) {
        if (twilightSparkle.hasOwnProperty(property)) {
            console.log(property); // name, magicSkill, canFly
        }
    }

})();
