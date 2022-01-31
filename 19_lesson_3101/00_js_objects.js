let user = {  // объект
    first_name: 'John',  // ключ: значение,
    last_name: 'Doe',
    city: 'Moscow',
    phone: '+7(495)333-78-91'
}

console.log(user.city); // обращаюсь к значению через ключ city

// переберем все ключи в объекте user
for (let key in user) {  // для каждого ключа в объекте user
    console.log('Ключ: ' + key);  // вывожу название ключа
    console.log('Значение: ' + user[key]);  // вывожу значение через ключ
}
