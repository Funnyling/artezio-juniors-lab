/**
 * @author ntishkevich
 */

this; // window

function func() {
    this; // window
}

var timer = {startTime: 0};
timer.start = function (end) {
    while(this.startTime < end) {
        this.startTime++;
        // Объект timer
        this;
    }
}

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this; // новый объект
}