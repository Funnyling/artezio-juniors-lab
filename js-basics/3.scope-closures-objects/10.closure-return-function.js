/**
 * @author ntishkevich
 */
function doTaxes(income, customerName) {
    var taxDeduction = 500;
    function mafiaSpecial(income) {
        return income * 0.05 - taxDeduction * 2;
    }
    return function () {
        var yourTax;
        if (customerName != 'God Father') {
            yourTax = income * 0.05 - taxDeduction;
        } else {
            yourTax = mafiaSpecial(income);
        }
        return yourTax;
    };
}
//Эквивалентные вызовы
var godGatherTaxes = doTaxes(50000, 'God Father')();
var doGodFatherTaxes = doTaxes(50000, 'God Father');
godGatherTaxes = doGodFatherTaxes();