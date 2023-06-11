/* если колбэк-функция маленькая и нужна только для передачи аргументом, 
её можно объявить прямо при вызове функции в которую передаём колбэк. 
Такая функция будет доступна только как значение параметра и больше нигде в коде */

"use strict";

function registerGuest(guestName, callback) {
  console.log(`Регистрируем гостя ${guestName}.`);
  callback(guestName);
}

registerGuest("Anatta", function greet(guestName) {
  console.log(`Добро пожаловать, ${guestName}!`);
});

registerGuest("Siddhartha", function notifyMe(guestName) {
  console.log(`Уважаемый ${guestName}, ваш номер будет готов через 30 минут!`);
});
