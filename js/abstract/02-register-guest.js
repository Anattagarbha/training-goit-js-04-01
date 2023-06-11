/* функция обратного вызова (callback, колбэк) - это функция, 
которая передаётся другой функции в качестве аргумента и та, 
в свою очередь, вызывает переданную функцию */

"use strict";

function greet(name) {
  console.log(`Добро пожаловать, ${name}!`);
}

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}!`);
  callback(name);
}

registerGuest("Anatta", greet);
