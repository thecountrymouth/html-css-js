let enteredNumber = document.getElementById("userNum");

let result1 = document.getElementById("calculation1");
let result2 = document.getElementById("calculation2");
let result3 = document.getElementById("calculation3");

const feet = 3.28084;
const meter = 0.3048;
const gallon = 0.264172;
const liter = 3.785411784;
const kilogram = 0.45359237;
const pound = 2.2046226218;


function displayResult() {
    
    let input = enteredNumber.value;
    let number = Number(input);

    const toFeet = number * feet;
    const toMeter = number * meter;
    const toGallon = number * gallon;
    const toLiter = number * liter;
    const toKilo = number * kilogram;
    const toPound = number * pound;
   
    result1.textContent = `${number} meters = ${toFeet.toFixed(3)} feets | ${number} feets = ${toMeter.toFixed(3)} meters`;
    
    result2.textContent = `${number} liters = ${toGallon.toFixed(3)} gallons | ${number} gallons = ${toLiter.toFixed(3)} liters`;
    
    result3.textContent = `${number} kilos = ${toPound.toFixed(3)} pounds | ${number} pounds = ${toKilo.toFixed(3)} kilos`;
    
}
displayResult();
enteredNumber.addEventListener("keyup", displayResult);