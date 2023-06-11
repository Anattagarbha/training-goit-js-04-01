"use strict";

/* императивный стиль программирования дает машине 
набор детальных инструкций для выполнения задачи */

// описание того, КАК что-то выполняется

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers);
