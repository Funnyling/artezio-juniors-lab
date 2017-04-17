/**
 * @author ntishkevich
 * @version 16.04.2017
 */

function сделатьХорошо() {
    console.log('Делаем все хорошо');
}

let магическоеЧисло = 42;

export const версия = '0.0.1 alpha';
function локальнаяФункция() {
    console.log('Меня не экспортнули :(');
}

export function неДелаемПлохо() {
    console.log('Запрещаем делать плохо');
}
export {магическоеЧисло};
export {сделатьХорошо};