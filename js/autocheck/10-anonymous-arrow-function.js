/* выполни рефакторинг функции calculateTotalPrice(orderedItems), 
заменив её объявление на стрелочную функцию. Замени коллбек-функцию,
передаваемую в метод forEach() на стрелочную функцию */

"use strict";

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));
  return totalPrice;
};
