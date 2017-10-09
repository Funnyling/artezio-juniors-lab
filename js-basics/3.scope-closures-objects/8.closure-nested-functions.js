/**
 * @author ntishkevich
 */
function mystery() {
    var secret = 6;
    function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    }
    return mystery2;
}

var hidden = mystery();
var result = hidden(3);