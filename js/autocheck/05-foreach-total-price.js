/* выполни рефакторинг функции так, чтобы вместо 
цикла for она использовала метод forEach */

"use strict";

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (item, idx) {
    totalPrice += orderedItems[idx];
  });
  return totalPrice;
}
