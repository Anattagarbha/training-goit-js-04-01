/* анонимные стрелочные функции отлично подходят как коллбеки для перебирающих 
методов массива из-за более краткого синтаксиса объявления */

"use strict";

const numbers = [5, 10, 15, 20, 25];

// function declaration

numbers.forEach(function (number, idx) {
  console.log(`Индекс ${idx}, Значение ${number}`);
});

console.log("Anonymous arrow function");

// anonymous arrow function

numbers.forEach((number, idx) => {
  console.log(`Индекс ${idx}, Значение ${number}`);
});

/* cтрелочную коллбек-функцию также можно 
объявлять отдельно и передавать на неё ссылку */

// link to arrow callback

console.log("Link to arrow callback");

const myNumbers = [5, 10, 15, 20, 25];

const logMessage = (number, idx) => {
  console.log(`Индекс ${idx}, Значение ${number}`);
};

myNumbers.forEach(logMessage);
