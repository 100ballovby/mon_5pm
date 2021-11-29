let date = new Date();
let isWeekend = date.getDay() === 0 || date.getDay === 6 ? true : false;

if ((date.getHours() >= 10 || date.getHours() <= 19) && !isWeekend) {
    alert('Мы работаем!')
} else {
    alert('Мы не работаем!')
}

