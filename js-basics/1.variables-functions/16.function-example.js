/**
 * @author ntishkevich
 */
function onSiteEnter(password) {
    if (password === 'pa$$word') {
        alert('Вы вошли как администратор');
    } else {
        alert('Добро пожаловать на наш сайт');
    }
}

onSiteEnter('123qweADS');

function onSiteEnter(password, adminMessage, userMessage) {
    alert(password === 'pa$$word' ? adminMessage : userMessage);
}

onSiteEnter(
    'pa$$word',
    'Вы вошли как администратор',
    'Добро пожаловать на наш сайт'
);

function onSiteEnter(password, onAdminCallback, onUserCallback) {
    // some async operations
    if (password === 'pa$$word') {
        onAdminCallback();
    } else {
        onUserCallback();
    }
}

onSiteEnter(
    'pa$$word',
    function () {
        alert('Вы вошли как администратор.');
    },
    function () {
        alert('Добро пожаловать на наш сайт');
    }
);

function onSiteEnter(password, onAdminCallback, onUserCallback) {
    // some async operations
    alert(password === 'pa$$word' ? onAdminCallback('Admin') : onUserCallback('Vasya'));
}

onSiteEnter(
    'pa$$word',
    function (adminName) {
        return 'Приветствую вас, ' + adminName + '. Вы вошли как администратор.';
    },
    function (userName) {
        return 'Добро пожаловать на наш сайт, ' + userName;
    }
);