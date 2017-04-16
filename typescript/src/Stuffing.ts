/**
 * Created by user on 15.04.2017.
 */

export default class Stuffing {
    public name: string;
    public price: number;
    public calories: number;

    constructor(name: string, price: number, calories: number) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}