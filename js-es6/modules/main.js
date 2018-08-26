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

import {default as сделатьХорошо} from './library';
import сделатьХорошо from './library';

import './arrays-includes';
[].pushAll();
сделатьХорошо();
релиз(); // error: undefined is not a function