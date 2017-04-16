/**
 * @author ntishkevich
 * @version 16.04.2017
 */

function spendWeekend(date, play, success, error) {
    setTimeout(() => {
        let table = Math.random() > .5 ? {date, play} : null;
        if (!table) {
            error(`Простите, но свободных столиков на ${date}`);
        } else {
            success(table);
        }
    }, 5000);
}

function successBookingTicket(ticket, successs, error) {
    console.log(`Вы собираетесь на пьесу ${ticket.play}`);
    successs({date: ticket.date});
}

function successBookingTable(table, success, error) {
    console.log(`Вы забронировали столик на ${table.date}`);
    success({name: 'Joji'});
}

function errorBooking(error) {
    console.log(error);
}

spendWeekend('21.04.2017', 'Волки и овцы', (ticket) => {
    successBookingTicket(ticket, (table) => {
        successBookingTable(table,
            friend => console.log(`${friend.name} пойдет с вами`),
            error => console.log(error)
        )
    }, error => console.log(error));
}, errorBooking);