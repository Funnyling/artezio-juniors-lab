/**
 * @author ntishkevich
 */
var onEnterFunction = function (password, equalityFunc, mismatchFunc) {
    if (password === 'pa$$word') {
        return equalityFunc();
    } else {
        return mismatchFunc();
    }
};
function equalityFunc() {
    alert('Вы вошли как администратор.');
}
onEnterFunction("123qweASD_1", equalityFunc, function () { alert('Неверный пароль.')});