/* перебирающий метод массива, который используется как замена 
циклов for и for...of при работе с коллекцией данных */

// поэлементно перебирает массив
// вызызвает коллбек-функцию для каждого элемента массива
// ничего не возвращает

"use strict";

const numbers = [5, 10, 15, 20, 25];

// классический for

for (let i = 0; i < numbers.length; i++) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

console.log("The end of classic for");

// перебирающий forEach

numbers.forEach(function (number, idx) {
  console.log(`Индекс ${idx}, значение ${numbers[idx]}`);
});

/* единственным случаем, когда стоит использовать циклы for или for...of 
для перебора массива - задачи с прерыванием выполнения цикла */
