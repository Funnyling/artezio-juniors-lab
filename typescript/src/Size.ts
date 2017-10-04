/**
 * Created by user on 15.04.2017.
 */
export default class Size {
    name: string;
    size: number;
    calories: number;

    static small = new Size('small', 5, 150);
    static medium = new Size('medium', 10, 260);

    constructor(name: string, maxSize: number, calories: number) {
        this.name = name;
        this.size = maxSize;
        this.calories = calories;
    }
}

