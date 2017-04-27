/**
 * @author ntishkevich
 */
const chalk = require('chalk');
function awesomeArtezioApp() {
    console.log(chalk.blue('Awesome App By Artezio.'));
    console.log(`
    CPU: ${chalk.green('30%')}
    RAM: ${chalk.yellow('60%')}
    DISK: ${chalk.red('80%')}
    `);
}
module.exports = awesomeArtezioApp;