/**
 * @author ntishkevich
 * @version 16.04.2017
 */
import {сделатьХорошо} from './library';
import {неДелаемПлохо} from './library';
import {версия} from './library';

сделатьХорошо();

неДелаемПлохо();

console.log(`${версия}`);


import * as library from './library';

library.сделатьХорошо();
library.неДелаемПлохо();

console.log(`${library.версия}`);