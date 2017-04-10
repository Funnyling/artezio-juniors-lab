/**
 * @author ntishkevich
 */
const user = {
    name: 'Стив',
    hasPrivilege(action) {
        return false;
    }
};

//noinspection JSDuplicatedDeclaration
function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error('Пользователю ' + user.name + ' не разрешено ' + action + '.');
    }
}

/////////////////////
//noinspection JSDuplicatedDeclaration
function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(`Пользова телю ${user.name} не разрешено ${action}.`);
    }
}

authorize(user, 'просмотр');

/////////////////
function authorizeWithTemplate(user, action) {
    if (!user.hasPrivilege(action)) {
        $("#error").html(`
            <h1>Внимание!</h1>
            <p>У пользвателя ${user.name} не достаточно прав доступа</p>
        `);
    }
}

user.name = 'Стив <script>alert(\'xss уязвимость\');</script>';
authorizeWithTemplate(user, 'просмотр');

// SaferHTML https://gist.github.com/jorendorff/1a17f69dbfaafa2304f0
function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    const arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }

  return s;
}

function safeAuthorize(user, action) {
    if (!user.hasPrivilege(action)) {
        $("#error").html(
            SaferHTML`
                <h1>Внимание!</h1>
                <p>У пользвателя ${user.name} не достаточно прав</p>
            `
        );
        /**
         * SaferHTML(templateData, user.name);
         */
    }
}

user.name = 'Стив <script>alert(\'xss уязвимость\');</script>';
authorize(user, 'просмотр');
