/* дополни код так, чтобы в переменной result был результат выполнения 
функции makePizza, а в переменной pointer была ссылка на функцию makePizza */

"use strict";

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;
