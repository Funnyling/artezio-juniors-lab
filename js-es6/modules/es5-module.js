/**
 * @author ntishkevich
 */
const Color = (() => {
    'use strict';

    /*
     Example of hexColor: ['#00ff00', '336699'],
     */
    const _hexProcessor =  {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        process: (bits) => {
            return [
                parseInt(bits[1], 16),
                parseInt(bits[2], 16),
                parseInt(bits[3], 16)
            ];
        }
    };

    class Color {
        constructor(hexColor) {
            this.color = hexColor;
            this.hasLeadHash = hexColor[0] === '#';
        }

        toRgb () {
            const hexColor = this.hasLeadHash ? this.color.substr(1, 6).toLowerCase() : this.color.toLowerCase();
            const bits = _hexProcessor.process(_hexProcessor.re.exec(hexColor));
            return _convertBitsToRgbArray(bits);
        }
    }

    function _convertBitsToRgbArray(bits) {
        const r = bits[0], g = bits[1], b = bits[2];
        r = (r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r);
        g = (g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g);
        b = (b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b);
        return [r, g, b];
    }

    Color.fromRgb = (rgb, hasLeadHash) => {
        const hexColor = rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16);
        return hasLeadHash ? '#' + hexColor : hexColor;
    };

    Color.mixRgbColors = (firstRgb, secondRgb) => {
        const firstColorRgb = firstRgb.toRgb();
        const secondColorRgb = secondRgb.toRgb();
        const newColorRgb = [];
        for (let i = 0; i < firstColorRgb.length; i++) {
            newColorRgb[i] = Math.round((firstColorRgb[i] + secondColorRgb[i]) / 2);
        }
        return Color.fromRgb(newColorRgb, firstRgb.hasLeadHash || secondColorRgb.hasLeadHash);
    };

    Color.VERSION = '1.0.0_RC';

    return Color;
})();

console.log(Color.VERSION);

const aquamarineColor = new Color('#48d1cc');

const whiteColor = new Color('#ffffff');

const newColor = Color.mixRgbColors(aquamarineColor, whiteColor);
