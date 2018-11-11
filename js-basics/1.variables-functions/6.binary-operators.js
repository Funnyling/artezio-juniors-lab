/**
 * @author ntishkevich
 */
var helloWorldMsg = 'Hello,' + ' JavaScript';
// Hello, JavaScript
var universalAnswer = 'Magic number' + 42; // Magic number 42

var result = 21 * '2'; // 42
result = 'abc' % 2; // NaN

'А' < 'Б'; // true
'Правило' > 'Право' // true

'2' > 1 // true, 2 > 1
'01' == 1 // true, 1 == 1
false == 0 // true, false становится числом 0
true == 1 // true, true становится числом 1

'01' === 1 // false
false === 0 // false
true === 1 // false

null > 0
null == 0
null >= 0

undefined > 0
undefined == 0
undefined >=0

null == undefined

+null // 0
+undefined // undefined

true || true // true
false || true // true
true || false // true
false || false // false
true || (x = 1) // undefined, x не присвоен

false || 'верну строку'// верну строку
1 || 0 // 1

1 && 5 // 5
null && 5 // null

!true // false
!0 // true

!!5 // true
!!null // false
