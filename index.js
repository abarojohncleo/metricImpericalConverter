const numInputEl = document.querySelector('#num-input');
const btnConvert = document.querySelector('#conv-btn');
const lenOutput = document.querySelector('#len');
const volOutput = document.querySelector('#vol');
const massOutput = document.querySelector('#mass')


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

btnConvert.addEventListener('click', function() {
    let number = Number(numInputEl.value);
    let meterToFeet = ((number * 3.281)).toFixed(3);
    let feetToMeter = ((number / 3.281)).toFixed(3);
    let litersToGallon = ((number * 0.264)).toFixed(3);
    let gallonToLiters = ((number / 0.264)).toFixed(3);
    let klgToPound = ((number * 2.204)).toFixed(3);
    let pdToKlg = ((number / 2.204)).toFixed(3);

    lenOutput.innerHTML = `${number} meters = ${meterToFeet} feet | ${number} feet = ${feetToMeter} meters`;
    volOutput.innerHTML = `${number} liters = ${litersToGallon} gallons | ${number} gallons = ${gallonToLiters} litters`;
    massOutput.innerHTML = `${number} kilos = ${klgToPound} pounds | ${number} pounds = ${pdToKlg} kilos`;
})


