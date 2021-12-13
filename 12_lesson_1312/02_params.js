function calculateMiles(d) {
    // тело функции (команды)
    let percent = 0.25;
    if (d > 6000) {
        percent = 0.35;
    }

    let miles = d * percent;
    console.log('За полет получим ' + miles + ' миль.')
}

calculateMiles(4125);
calculateMiles(11278);
calculateMiles(2000);

