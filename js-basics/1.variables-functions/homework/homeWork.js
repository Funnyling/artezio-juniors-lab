/**
 * Задание № 1
 *  Напишите функцию pow(x,n), которая возвращает x в степени n.
 *  Иначе говоря, умножает x на себя n раз и возвращает результат.
 *
 *   pow(3, 2) = 3 * 3 = 9
 *   pow(3, 3) = 3 * 3 * 3 = 27
 *   pow(1, 100) = 1 * 1 * ...* 1 = 1
 *   Напишите функцию, которая запрашивает x и n, а затем выводит результат pow(x,n).
 **/

/**
 * Задание № 2
 *  Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2.
 *  То есть, следующее число получается как сумма двух предыдущих.
 *  Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и
 *  так далее: 1, 1, 2, 3, 5, 8, 13, 21....
 *
 *  Напишите функцию, которая запрашивает n, а затем выводит результат fib(n).
 **/

/**
 * Задание № 3
 *  Имеется функция sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
 *    sumTo(1) = 1
 *    sumTo(2) = 2 + 1 = 3
 *    sumTo(3) = 3 + 2 + 1 = 6
 *    sumTo(4) = 4 + 3 + 2 + 1 = 10
 *    ...
 *    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
 *
 *    Необходимо реализовать функцию sumTo, также написать функцию, которая запрашивает n,
 *    а затем вывод результат sumTo(n)
 */

/**
 * Задание № 4
 * У наших знакомых фермеров очень трудно с математикой, но все хорошо с разведением овец.
 * Фермыры просят помочь им с подсчетом популяции овец.
 *
 * Требуется реализовать функцию, которая принимает в параметрах кол-во овец и месяц,
 * в который мы хотим узнать популяцию овец. Начальный месяц отсчета принимать за 1цу.
 *
 * Необходимо реализовать расчет популяции овец следуя правилам ниже:
 *
 * 1. Если номер месяца месяц делится без остатка на 4, то находи 75% популяции овец.
 *      Логируем это значение в консоль в формате, указанном ниже.
 *      Затем отнимает это значение от общего кол-ва овец.
 *
 * 2. В противном случае, если популяции больше 10000, найти половину от популяции овец.
 *      Логируем это значение в консоль в формате, указанном ниже.
 *      Затем отнимаем это значение из общего числа овец.
 *
 * Используемый формат сообщения после уменьшения числа популяции овец:
 * --------------------------------------------
 * Отнимаем <число> овец от их популяции.
 * --------------------------------------------
 *
 * 3. Также каждый месяц популяции увеличивается на 4.
 *      Логируем в консоль значение популяции овец, полученное после увеличения.
 *
 * Формат сообщения после увеличения популяции овец
 * --------------------------------------------
 * Будет <число> овец после 1 месяца(ев)
 * --------------------------------------------
 *
 * Для решения использовать использовать циклы
 */
var sheepCount = 4;
var lastMonth = 12;

function predictSheepCount(startSheepCount, lastMonth) {

}

predictSheepCount(sheepCount, lastMonth);

/**
 *
 *
 */