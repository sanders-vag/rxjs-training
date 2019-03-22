import { cleanList } from './utils/utils';
import ex01 from './exercises/01-imperative-array';
import ex02 from './exercises/02-functional-array';
import ex03 from './exercises/03-functional-event-stream';
import { ex041, ex042 } from './exercises/04-promise-vs-observables';
import ex05 from './exercises/05-dom-events';
import ex06 from './exercises/06-bmi';
import ex07 from './exercises/07-combinators-and-or';
import ex08 from './exercises/08-correlational-combinators';
import ex09 from './exercises/09-cold-and-hot';
import ex10 from './exercises/10-flat-map';

import './styles.css';

ex01();
ex02();
ex03();
ex041();
ex042();
ex05();
//ex06(); //conflicts with ex07
ex07();
ex08();
ex09();
ex10();
