/**
 * @author ntishkevich
 * @version 16.04.2017
 */
import {сделатьХорошо} from './app';

import {неДелаемПлохо, appVersion, appName} from './app';

сделатьХорошо();

неДелаемПлохо();

console.log(`${appName} - ${appVersion}`);


import * as app from './app';

app.сделатьХорошо();
app.неДелаемПлохо();

console.log(`${app.appName} - ${app.appVersion}`);