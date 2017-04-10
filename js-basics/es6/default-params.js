/**
 * @author ntishkevich
 */
function showWarning(width, height, title, message) {
    width = width || 200;
    height = height || 100;
    title = title || "Предупреждение";

    // Создание от открытие предупреждения
}

showWarning(undefined, 200, undefined, 'Предупреждаю! Буду стрелять!');
// 200, 200, 'Предупреждение', 'Предупреждаю! Буду стрелять!'

showWarning(undefined, 200, undefined);
// 200, 200, 'Предупреждение', undefined


function showWarningWithDefaults(width=200, height=100,
                                 title='Предупреждение', message) {
    // Создание от открытие предупреждения
}

showWarningWithDefaults(undefined, 200, undefined, 'Предупреждаю! Буду стрелять!');
// 200, 200, 'Предупреждение', 'Предупреждаю! Буду стрелять!'

showWarningWithDefaults(undefined, 200, undefined);
// 200, 200, 'Предупреждение', undefined