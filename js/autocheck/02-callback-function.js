/* дополни функцию makeMessage так, чтобы она ожидала вторым 
параметром (параметр callback) колбэк-функцию и возвращала ее вызов */

"use strict";

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
