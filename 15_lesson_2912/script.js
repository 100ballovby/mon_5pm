let catalogData = [
    {
        isAvailable: true,
        isSpecial: true
    },
    {
        isAvailable: false,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    },
];

function updateCatalog(products) {
    let elements = document.querySelectorAll('.product');
    for (let i = 0; i < elements.length; i++) {
        let elem = elements[i]; // перебираю элементы из каталога
        let prod = products[i];  // перебираем фактические значения доступности

        let availabilityClass = 'product--available';
        if (!prod.isAvailable) {  // если продукт недоступен
            availabilityClass = 'product--unavailable'
        }
        elem.classList.add(availabilityClass);

        if (prod.isSpecial) {
            elem.classList.add('product--special');
        }
    }
};

updateCatalog(catalogData);

/*
let specialProd = document.querySelector(
    '.product:nth-child(2)'  // второй блок по счету
);
specialProd.classList.add('product--special');

let unavProd = document.querySelector(
    '.product:last-child'  // последний блок
);
unavProd.classList.add('product--unavailable');

*/


