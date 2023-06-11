/* абстракция - скрытие деталей реализации. Позволяет думать 
о задачах на более высоком (абстрактном) уровне */

"use strict";

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// напишем функцию, которая вызывает console.log() N раз

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// printValue

function printValue(value) {
  console.log(value);
}

function prettyPrintValue(value) {
  console.log(`Logging ${value}`);
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
