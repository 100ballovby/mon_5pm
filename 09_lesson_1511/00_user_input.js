/*
1 alert(message) - вывод сообщения в окне
2 prompt(question, default) - получить данные от пользователя и записать в переменную
3 confirm(question)
*/

let name; // объявляю переменную
name = prompt('Как тебя зовут?', '')

alert('Привет, ' + name + '!')

let isBoss = confirm('Ты главный тут?')
alert(isBoss)

