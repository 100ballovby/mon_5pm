/*
Для данного числа n < 100 закончите фразу
“На лугу пасется...” одним из возможных
продолжений: “n коров”, “n корова”, “n коровы”,
правильно склоняя слово “корова”. Программа
должна вывести введенное число n и одно из слов:
korov, korova или korovy. Между числом и
словом должен стоять ровно один пробел.
*/
let n = 24;
let word;

if (n >= 11 && n <= 14) {
    word = 'korov';
} else {
    let temp = n % 10;
    if (temp === 0 || (temp >= 5 && temp <= 9)) {
        word = 'korov';
    } else if (temp === 1) {
        word = 'korova';
    } else if (temp >= 2 && temp <= 4) {
        word = 'korovy';
    }
}

console.log(word)