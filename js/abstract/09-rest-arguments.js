/* у стрелочных функций нет локальной переменной arguments, 
содержащей все аргументы. Если необходимо собрать все аргументы 
в массив, используется операция rest */

"use strict";

const add = (...args) => {
  console.log(args);
};