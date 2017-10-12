/**
 * @author ntishkevich
 */
function doTaxes(income, customerName, deduction) {
    var taxDeduction = deduction || 50,
        yourTax = income * 0.05 - taxDeduction;
    console.log(" Dear " + customerName + ", your tax is " + yourTax);
    return yourTax;
}

doTaxes(650, 'God Father', 500);

doTaxes(350, 'Someone');

doTaxes(350, 'Benedict', 0);