/**
 * @author ntishkevich
 */
var Color = (function () {
    'use strict';

    function Color(hexColor) {
        this.color = hexColor;
        this.hasLeadHash = hexColor[0] === '#';

        this.toRgb = function () {
            var hexColor = this.hasLeadHash ? this.color.substr(1, 6).toLowerCase() : this.color.toLowerCase();
            var bits = _hexProcessor.process(_hexProcessor.re.exec(hexColor));
            return _convertBitsToRgbArray(bits);
        }
    }

    Color.VERSION = '1.0.0_RC';

    return Color;
})();

console.log(Color.VERSION);

var aquamarineColor = Color('#48d1cc');

var whiteColor = Color('#ffffff');

