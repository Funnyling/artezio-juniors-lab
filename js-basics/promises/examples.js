/**
 * @author ntishkevich
 * @version 16.04.2017
 */

let myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Вызываем при успеной работе');

    } else {
        reject('Вызываем при ошибке');
    }
});

myPromise = new Promise((resolve, reject) => {
    reject(42);
});

let rejectedPromise = Promise.reject(42);

myPromise = new Promise(resolve => {
    resolve(42);
});

let resolvedPromise = Promise.resolve(42);

let promises = Promise.all([rejectedPromise, resolvedPromise]);

let race = Promise.race([rejectedPromise, resolvedPromise]);

