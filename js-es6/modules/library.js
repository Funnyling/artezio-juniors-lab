/**
 * @author ntishkevich
 * @version 16.04.2017
 */

function сделатьХорошо() {
    console.log('Делаем все хорошо');
}

let магическоеЧисло = 42;

export const версия = '0.0.1 alpha';
function новаяВерсия(новаяВерсия) {
    версия = новаяВерсия;
}

export function неДелаемПлохо() {
    console.log('Запрещаем делать плохо');
}
export {магическоеЧисло};
export {новаяВерсия};
export {сделатьХорошо};

