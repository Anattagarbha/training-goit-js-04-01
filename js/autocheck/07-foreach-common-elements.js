/* выполни рефакторинг функции так, чтобы вместо 
цикла for она использовала метод forEach */

"use strict";

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
}
