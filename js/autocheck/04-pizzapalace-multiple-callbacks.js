/* выполни рефакторинг метода order так, чтобы он принимал 
вторым и третим параметрами два колбэка onSuccess и onError */

"use strict";

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};

function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! ${error}`;
}

pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
