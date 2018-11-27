/**
 * @author ntishkevich
 */
isNaN(NaN);       // true
isNaN(undefined); // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
// strings
isNaN("37");      // false: "37" преобразуется в число 37 которое не NaN
isNaN("37.37");   // false: "37.37" преобразуется в число 37.37 которое не NaN
isNaN("");        // false: пустая строка преобразуется в 0 которое не NaN
isNaN(" ");       // false: строка с пробелом преобразуется в 0 которое не NaN