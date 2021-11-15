/*
1) String(x) - преобразовывает x в строку
2) Number(x) - преобразовывает х в число
3) Boolean(x) - преобразовывает х в логическое значение
*/
let boss = true;
console.log('Босс: ' + typeof boss);
boss = String(boss);  // меняю тип данных на строку
console.log('Босс теперь: ' + typeof boss);

let num1 = '45', num2 = 3;
console.log(num1 + num2, typeof num1);
num1 = Number(num1);
console.log(num1 + num2, typeof num1);


console.log(Boolean(0));  // false
console.log(Boolean(1)); // true
console.log(Boolean(54)); // true
console.log(Boolean(-89)); // true
