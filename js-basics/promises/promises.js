/**
 * @author ntishkevich
 * @version 16.04.2017
 */
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
                reject(`Простите, но свободных столиков на ${date}`);
            }
        }, 5000);
    })
    return promise;
}

function bookTicket(ticket) {
    console.log(`Вы собираетесь на пьесу ${ticket.play}`);
    return {date: ticket.date};
}

function bookTable(table) {
    console.log(`Вы забронировали столик на ${table.date}`);
    return {name: 'Joji'};
}

function errorBooking(error) {
    console.log(error);
}

spendWeekend('21.04.2017', 'Волки и овцы')
    .then(bookTicket)
    .then(bookTable)
    .then(friend => console.log(`${friend.name} пойдет с вами`))
    .catch(errorBooking);