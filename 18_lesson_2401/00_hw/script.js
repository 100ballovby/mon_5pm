let assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];

function updateCards(cards) {
    let items = document.querySelectorAll('.goods .good');  // коллекция из HTML кода
    for (let i = 0; i < items.length; i++) {  // просматриваю каждую мороженку
        let item = items[i];  // текущая мороженка
        let status = cards[i];  // текущий элемент массива состояний
        let itemAvail = 'good--available';  // по умолчанию считаем, что мороженое есть в наличии
        let itemHit = 'good--hit';  // по умолчанию считаем, что мороженое - хит продаж

        if (status.inStock === false) {  // если товара нет в наличии
            itemAvail = 'good--unavailable'; // присваиваем переменной соответствующий класс
        }
        item.classList.add(itemAvail);  // добавляю соответствующий класс элементу на странице

        if (status.isHit) {  // если в isHit true
            item.classList.add(itemHit);  // делаю продукт хитом продаж
        }
    }
}

updateCards(assortmentData);

/* Техническое задание

На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

- inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
- isHit. Если значение true — мороженое самое популярное среди покупателей.

Каждому состоянию товара соответствует специальный класс:

Товар в наличии — good--available.
Недоступный товар — good--unavailable.
Хит продаж — good--hit.

Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

*/

