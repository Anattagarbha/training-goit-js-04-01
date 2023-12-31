/* выполни рефакторинг функции так, чтобы вместо 
цикла for она использовала метод forEach */

"use strict";

function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}
