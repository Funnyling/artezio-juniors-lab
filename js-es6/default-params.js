/**
 * @author ntishkevich
 */
function showWarning(message, width, height, title) {
    width = width || 200;
    height = height || 100;
    title = title || 'Предупреждение';

    console.log(
        'message = ' + message,
        'width = ' + width,
        'height = ' + height,
        'title = ' + title
    );
    // Создание модального окна "Предупреждение"
}

showWarning('Предупреждаю! Буду стрелять!', undefined, 200);
// message = Предупреждаю! Буду стрелять! width = 200 height = 200 title = 'Предупреждение'


function showWarningWithDefaults(message, width = 200, height = 100,
                                 title = 'Предупреждение') {
    console.log(
        'message = ' + message,
        'width = ' + width,
        'height = ' + height,
        'title = ' + title
    );
    // Создание модального окна "Предупреждение"
}
showWarningWithDefaults('Предупреждаю! Буду стрелять!', null, 200);
// message = Предупреждаю! Буду стрелять! width = null height = 200 title = 'Предупреждение'

showWarningWithDefaults('Предупреждаю! Буду стрелять!', undefined, 200);
// message = Предупреждаю! Буду стрелять! width = 200 height = 200 title = 'Предупреждение'

function animalSentenceFancy(animals2 = 'tigers',
                             animals3 = (animals2 === 'bears') ? 'sea lions' : 'bears') {
    return 'Lions and ' + animals2 + ' and ' + animals3 + '! Oh my!';
}

animalSentenceFancy('bears');
// Lions and bears and sea lions. Oh my!