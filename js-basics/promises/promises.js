/**
 * @author ntishkevich
 * @version 16.04.2017
 */

function spendWeekend(date, play) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5) {
                resolve({date, play});
            } else {
                reject(`Простите, но билетов не осталось на ${date}`);
            }
        }, 1000);
    });

    return promise;
}

function bookTable(ticket) {
    console.log(`Вы собираетесь на пьесу ${ticket.play}`);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5) {
                resolve({date: ticket.date});
            } else {
                reject(`Простите, но столиков не осталось на ${date}`);
            }
        }, 2000);
    });

    return promise;
}

function inviteJoji(table) {
    console.log(`Вы забронировали столик на ${table.date}`);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5) {
                resolve({name: 'Joji'});
            } else {
                reject('Простите, но Joji не пойдет никуда : (');
            }
        }, 2000);
    });

    return promise;
}

function errorBooking(error) {
    console.log(error);
}

spendWeekend('21.04.2017', 'Волки и овцы')
    .then(bookTable)
    .then(inviteJoji)
    .then(friend => console.log(`${friend.name} пойдет с вами`))
    .catch(errorBooking);