/**
 * @author ntishkevich
 */
function Cook(cookName, mealReqiuredTime) {
    var REQUIRED_TIME = mealReqiuredTime;
    this.cookName = cookName;

    function calcRemainingTime(wastedTime) {
        return REQUIRED_TIME - wastedTime;
    }

    this.cookSausages = function() {
        for (var i = 1; i <= REQUIRED_TIME; i++) {
            if(calcRemainingTime(i) > 0) {
                console.log(calcRemainingTime(i)
                    + ' мин., Турецкий');
            } else {
                console.log('Что там с сосисками, '
                    + this.cookName + '?');
                console.log('5 минут, Турецкий');
            }
        }
    };
}

var charlie = new Cook('Чарли', 4);
charlie.REQUIRED_TIME; // undefined
charlie.calcRemainingTime(42);
// TypeError: undefined is not a function
console.log('Что там с сосисками, ' +
    charlie.cookName + '?');
charlie.cookSausages();
//Что там с сосисками, Чарли?
//3 мин., Турецкий
//2 мин., Турецкий
//1 мин., Турецкий
//Что там с сосисками, Чарли?
//5 минут, Турецкий