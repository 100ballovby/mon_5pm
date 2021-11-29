let date = new Date();

console.log(date.getDay())  // порядковый номер дня недели
console.log(date.getHours())  // час
console.log(date.getMinutes())  // minute
console.log(date.getDate())  // число месяца

if (date.getHours() >= 10 || date.getHours() <= 19) {
    alert('Мы работаем!')
} else {
    alert('Мы не работаем!')
}

