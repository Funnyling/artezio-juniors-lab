/**
 * @author ntishkevich
 */
var february29 = new Date(2019, 1, 29);

var today = new Date();
today.setSeconds(today.getSeconds() + 3600);

today.setDate(1);
today.setDate(0);
today.setDate(-1);