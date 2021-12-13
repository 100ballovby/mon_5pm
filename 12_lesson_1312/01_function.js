function calculateMiles() {  // определение функции
    // тело функции (команды)
    let distance = 4125;
    let percent = 0.25;

    if (distance > 6000) {
        percent = 0.35;
    }

    let miles = distance * percent;
    console.log('За полет получим ' + miles + ' миль.')
}

calculateMiles();