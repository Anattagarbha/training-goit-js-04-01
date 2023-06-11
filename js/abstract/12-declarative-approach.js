/* описывает то, ЧТО мы хотим получить в результате, а не как это сделать. 
Порядок выполнения и способ достижения не важен */

"use strict";

const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter((value) => value > 3);

console.log(filteredNumbers);
