/* замени объявление функции getCommonElements() 
и коллбек для метода forEach() на стрелочные функции */

"use strict";

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];
  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
};
