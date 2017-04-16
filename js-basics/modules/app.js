/**
 * @author ntishkevich
 * @version 16.04.2017
 */

function сделатьХорошо() {
    console.log('Делаем все хорошо');
}

let magicNumber = 42;

export const appVersion = '0.0.1 alpha';
export let appName = 'ГИС ЖКХ';

export function неДелаемПлохо() {
    console.log('Запрещаем делать плохо');
}
export {magicNumber};
export {сделатьХорошо};