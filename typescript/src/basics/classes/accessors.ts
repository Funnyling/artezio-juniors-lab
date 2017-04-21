let hasAccess = false;

class Account {
    private _email: string;

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        if (hasAccess) {
            this.email = email;
        } else {
            console.log('Нет прав доступа');
        }
    }
}

let account = new Account();
account.email = 'Steve_Balmer@microsoft.com';

if (account.email) {
    console.log(account.email);
}