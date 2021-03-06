/*
> больше
< меньше
>= больше равно
<= меньше равно
!= НЕ равно
!== СТРОГО НЕ равно (без приведения типов)
== равно
=== строго равно (без приведения типов)
*/

console.log((2 + 3) == (10 / 2));

console.log('elephant' < 'mouse'); // true


/*
Алгоритм сравнения двух строк довольно прост:

1. Сначала сравниваются первые символы строк.
2. Если первый символ первой строки больше (меньше),
чем первый символ второй, то первая строка больше (меньше)
второй. Сравнение завершено.
3. Если первые символы равны, то таким же образом сравниваются
уже вторые символы строк.
4. Сравнение продолжается, пока не закончится одна из строк.
5. Если обе строки заканчиваются одновременно, то они равны.
Иначе, большей считается более длинная строка.
*/

console.log('' == false); // true
console.log(0 == false); // true

console.log('' === false); // false
console.log(0 === false); // false
