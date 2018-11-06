/**
 * Файл с утилитарными методами
 *
 * @author Nick Tishkevich
 * @since 0.0.1
 */

// Начнем с простенького. Все просто, даем параметр а, проверяем,
// если пустой, то возвращаем пустую строку, иначе textContent или innerText
function text(a) {
    return (a != null) ? (a.textContent || a.innerText) : '';
}

// Немножко посложней
// Не трудно догадаться, что делает метод. Может у кого-нибудь есть варианты?
// Метод исключает из строки спец символы, но какие?
// Узнать какие символы можно открыв исходники
function esc(a) {
    return a.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&")
        .replace(/\s/g, "\\s");
}


// Окей, с этим более-менее можно жить
// Как насчет такого случая?
// По названию функции мы ожидаем, что получим DOM?! А зачем, если он и так доступен как document?
// Нет-нет-нет, точно не document получим.
// Давайте взглянем на пример использования этой функции, может так станет понятно, что он должна делать?
function getDOM(a, b) {
    b = b || "";
    if (a != null) {
        if (typeof (a.length) != "undefined") {
            return (a.length > 0) ? a : throwError(b);
        }
        else {
            return a;
        }
    } else {
        return (b != "") ? throwError(b) : null;
    }
}

// А сейчас стало лучше? Есть предположения, что она делает?
// Я вам сейчас расскажу, эта функция проверяет, пустой ли параметр a,
// если да, то мы получаем ошибку с текстовкой из параметра b;
text(getDom(document.getElementsByTagName('title')[0]));

// А теперь давайте попробуем добавить какие-нибудь комментарии и немножко отрефакторить тот код
// Первым, делом я бы переименовал функцию.
// Я бы предложил не бросать ошибку, а вернуть null, мы видели,что в text идет на него проверка.
// Почему не ошибка, в данном случае, мы получим ошибку и нигде не отлавливаем ее, т.е. наш скрипт упадет.
// Плюс не понятна ситуация, когда выбрасявается ошибка с пустым сообщением, как понимать такую ошибку?
// Добавим комментарий на случай обработки случая с коллекциями элементов, чтобы отметить этот кейс с проверкой длины
function checkNode(node) {
    if (node == null) {
        return null;
    }

    // Если получаем массив, псевдо-массив и его длина не нулевая,
    // то возвращаем его же, в противном случаем возвращаем null
    if (node.length == undefined) {
        return node.length > 0 ? node : null;
    }

    return node;
}

// Как еще мы можем улучшить понимание нашего кода?
// Можем описать ее поведение и ожидаемый результат над ней,
// чтобы не смотря на реализацию функции не гадать, что же она делает


/**
 * Функция проверяет переданный параметр node на пустоту и возвращает node в случаях:
 * 1. если node не равен null или undefined
 * 2. если node не равен null или undefined и node является псевдо-массивом узлов и имеет ненулевую длину
 * Иначе возвращает null
 */
function checkNode(node) {
    if (node == null) {
        return null;
    }

    // Если получаем массив, псевдо-массив и его длина не нулевая,
    // то возвращаем его же, в противном случаем возвращаем null
    if (node.length == undefined) {
        return node.length > 0 ? node : null;
    }

    return node;
}

// Намного лучше?
// А можем ли мы пойти еще дальше? dicaprio_nachalo.jpeg
// А почему бы и нет? Добавим сюда такую вещь как jsDoc

/**
 * Функция проверяет переданный параметр node на пустоту и возвращает node в случаях
 *
 * @param {NodeList|HTMLCollection|Node|null} node узел, который будет проверяться на пустоту
 * @returns {NodeList|HTMLCollection|Node|null} возвращает node, если node не равен null или undefined
 * и если node является псевдо-массивом узлов и имеет ненулевую длину, иначе возвращает
 */
function checkNode(node) {
    if (node == null) {
        return null;
    }

    // Если получаем массив, псевдо-массив и его длина не нулевая,
    // то возвращаем его же, в противном случаем возвращаем null
    if (node.length == undefined) {
        return node.length > 0 ? node : null;
    }

    return node;
}

checkNode(document.getElementsByName('title')[0]);

// Вот пример функции с документации из библиотеки chai.

/**
 * Checks if the given value is NaN or not.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number}
 * @name isNaN
 * @param {any} value The value which has to be checked if it is NaN
 * @return {boolean} If it's a NaN value, then return true. Otherwise, return false.
 * @example
 *  isNaN(NaN); // true
 */
function isNaN(value) {
    return value !== value;
}

// А вот и пример с проекта, на котором необходимо было расширить уже написанное API и добавить туда плагин
// отображающий пользователю, сколько осталось символов у в поле ввода. Элементы могут быть разными, в которых
// должно отображаться оставшиеся количество символов.

/**
 * Register a plugin for our api Shub-Niggurath
 *
 * @param {Shub-Niggurath} api
 * @return {void}
 */
(function (api) {

    /**
     * A set of default options, which will be used instead of
     * empty properties of the object which is passed to lengthTracker method
     *
     * @const
     * @type MaxLengthTrackerOptions
     */
    const defaultOptions = {
        onLengthChanged: api.noop,
        onInit: api.noop
    };

    /**
     * A function-plugin adds a handler for a group of event change, keyup, keypress
     * to notify a user about the remaining length in the HTMLInputElement
     *
     * @this {HTMLElementWrapper} a wrapper around HTMLInputElement
     * @param {MaxLengthTrackerOptions} options an object with custom option to properly set-up a plugin
     * @return {HTMLElementWrapper} a wrapper input html element in which a text could be typed
     */
    function maxLengthTracker(options) {
        const settings = Object.assign({}, defaultOptions, options);
        return this
            .each(settings.onInit)
            .on('change keyup keypress', notifyLengthChanged)
            .trigger('change');

        function notifyLengthChanged(inputEl) {
            const currentLength = inputEl.value.length;
            const maxLength = parseInt(inputEl.getAttribute('maxlength'));

            settings.onLengthChanged(inputEl, currentLength, maxLength);
        }
    }


    api.plugins.maxLengthTracker = maxLengthTracker;

    /**
     * A callback fired before a lengthTracker is applied to the HtmlInputElement.
     *
     * @callback OnInitFunction
     * @param {HTMLInputElement} inputEl - a HtmlInputElement with a lengthTracker applied.
     */

    /**
     * A callback fired when an input length has been changed
     *
     * @callback OnLengthChangedFunction
     * @param {HTMLInputElement} inputEl the HtmlInputElement element, that has fired
     * one of the "change" events (change, keyup, keypress)
     * @param {number} currentLength current length of the input value
     * @param {number} maxLength value of the input "maxlength" attribute
     */

    /**
     * An object with onLengthChanged and onInit callbacks.
     *
     * @typedef {object} MaxLengthTrackerOptions
     * @property {OnInitFunction} onInit called when a lengthTracker is going to be added to a HtmlInputElement
     * @property {OnLengthChangedFunction} onLengthChanged called when the length of the input has been changed
     *
     */

    /**
     * @typedef {object} HTMLElementWrapper
     * @property {HTMLElement} a html element
     * @property {function} each
     * @property {function} on
     * @property {function} trigger method dispatches an passed event on the wrapped element
     */
})(window.ShubNiggurath);


/**
 * @type {Shub-Niggurath}
 */
window.ShubNiggurath = {};

/**
 * @typedef {object} Shub-Niggurath
 * @property {Object.<string, ShubNiggurathPlugin>} plugins an object with all registered plugins.
 * It is a simple dictionary, where all keys match to plugins' names and the values are plugin-functions
 */

/**
 * @typedef {function} ShubNiggurathPlugin
 */
