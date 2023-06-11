/* дополни второй вызов функции makePizza(pizzaName, callback), 
передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), 
которая логирует строку "Eating pizza <имя пиццы>" */

"use strict";

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
