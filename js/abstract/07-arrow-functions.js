/* стрелочные функции имеют сокращённый, более 
лаконичный синтаксис, что уменьшает объем кода */

// все СФ создаются как функциональное выражение

/* ключевое слово function не используется, вместо этого 
сразу идёт объявление параметров, за которыми следует 
символ => и тело функции */

"use strict";

// function declaration

function add(a, b, c) {
  return a + b + c;
}

// arrow function

const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// single parameter

const singleAdd = (a) => {
  return a + 16777;
};

// no parameters

const noParams = () => {
  console.log("Hello, world!");
};
