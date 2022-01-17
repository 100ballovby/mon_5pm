function validateForm(form_name, field_name) {
    let name = document.forms[form_name][field_name].value;
    // ^ нахожу на странице форму с именем form_name и полем field_name

    let div = document.createElement('div');
    // ^ создает новый элемент с тегом div
    let msg = document.querySelector('.messages');

    if (name === '') {
        div.className = 'alert alert-danger';
        //  ^ дает новое имя класса дивам
        div.innerHTML = `Поле ${field_name} должно быть заполнено!`;
        // ^ добавляет элементу текст
        msg.appendChild(div);
        return false;
    } else {
        div.className = 'alert alert-success';
        div.innerHTML = 'Спасибо! Форма успешно отправлена!'
        msg.appendChild(div);
        return true;
    }
}

function number_validation(tag) {
    let elem = document.querySelector(tag).value;
    let text;
    if (elem >= 1 && elem <= 10) {
        text = 'OK';
    } else {
        text = 'Неправильный ввод!';
    }
    document.querySelector('.demo').innerHTML = text;
}



