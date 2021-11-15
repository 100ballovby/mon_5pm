let year = Number(prompt('В каком году родился Путин?', ''));

if (year === 1952) {  // если числа совпали
    alert('Вы правы!');
    alert('Молодец!');
} else if (year > 1952) {  // иначе если
    alert('Он не такой молодой!');
} else { // если условие не выполнилось, то:
    alert('Вы ошиблись!');
}

let age = Number(prompt('Сколько тебе лет?', '')),
    allowed = false;
/*
if (age >= 18) {
    allowed = true;
} else {
    allowed = false;
}*/
let result = (age >= 18) ? true : false;


alert(result);

