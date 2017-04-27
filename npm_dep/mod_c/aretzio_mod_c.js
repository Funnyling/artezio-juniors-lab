/**
 * @author ntishkevich
 */
const awesomeArtezioApp = require('artezio_mod_b');
const chalk = require('chalk');
function modCDecorator() {
    awesomeArtezioApp();
    console.log(chalk.green(`
    App is running on 127.0.0.1:8081
    ${chalk.blue.underline.bold('<Application name>')}    
    `))
}
module.exports = modCDecorator;