class Color {
    private hasLeadHash: boolean;
    private color: string;
    static readonly libVersion = '0.0.1RC';

    constructor(hexColor) {
        this.color = hexColor;
        this.hasLeadHash = hexColor[0] === '#';
    }

    static fromRgb = (rgb: number[]): Color  => {
        const hexColor: string = rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16);
        return new Color(hexColor);
    };

}
console.log(Color.libVersion);
const aquamarineColor = new Color('#48d1cc');
const newColor = Color.fromRgb([255, 255, 255]);
