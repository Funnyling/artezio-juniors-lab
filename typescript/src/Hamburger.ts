/**
 * Created by user on 15.04.2017.
 */
import Size from './Size';
import Topping from './Topping';
import Stuffing from './Stuffing';

export default class Hamburger {
    private toppings: Array<Topping>;
    private stuffing: Array<Stuffing>;
    private size: Size;

    constructor(size: Size) {
        this.size = size;
    }

    addTopping(topping: Topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping: Topping) {
        let index: number = this.toppings.indexOf(topping);
        if (index) {
            this.toppings.splice(index, 1);
        }
    }

    addStuffing(stuffing: Stuffing) {
        this.stuffing.push(stuffing);
    }

    removeStuffing(stuffing: Stuffing) {
        let index: number = this.stuffing.indexOf(stuffing);
        if (index) {
            this.stuffing.splice(index, 1);
        }
    }

    getSize () {
        return this.size.name;
    }

    totalPrice() {
        let stuffingPrice = this.stuffing.map(stf => stf.price).reduce((totalPrice, price) => totalPrice += price, 0);
        let toppingsPrice = this.toppings.map(tpg => tpg.price).reduce((totalPrice, price) => totalPrice += price, 0);
        return stuffingPrice + toppingsPrice;
    }

    totalCalories() {
        let stuffingCalories = this.stuffing.map(stf => stf.calories).reduce((calories, cl) => calories += cl, 0);
        let toppingsCalories = this.toppings.map(tpg => tpg.calories).reduce((calories, cl) => calories += cl, 0);
        return stuffingCalories + toppingsCalories;
    }
}
