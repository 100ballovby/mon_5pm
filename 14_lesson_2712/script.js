let specialProd = document.querySelector(
    '.product:nth-child(2)'  // второй блок по счету
);
specialProd.classList.add('product--special');

let unavProd = document.querySelector(
    '.product:last-child'  // последний блок
);
unavProd.classList.add('product--unavailable');


