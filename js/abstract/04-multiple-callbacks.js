/* выполним рефакторинг функции так, чтобы она принимала два колбэка 
onAvailable и onNotAvailable, и вызывала их по условию */

"use strict";

function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;
  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте`);
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьет сообщение.`);
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
}
