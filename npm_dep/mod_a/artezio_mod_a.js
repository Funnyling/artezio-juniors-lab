/**
 * @author ntishkevich
 */
const awesomeArtezioApp = require('artezio_mod_b');
const colors = require('colors');

function modADecorator() {
    awesomeArtezioApp();
    console.log('Your awesome app is running on 127.0.0.1:8080'.underline.green);
}
module.exports = modADecorator;