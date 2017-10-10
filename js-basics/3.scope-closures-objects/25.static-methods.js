/**
 * @author ntishkevich
 */
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

