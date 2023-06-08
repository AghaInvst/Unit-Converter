const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let kilogramsEl = document.getElementById("kilograms-el");

convertBtn.addEventListener("click", function() {
  let baseValue = parseFloat(inputEl.value);

  if (isNaN(baseValue)) {
    
    lengthEl.textContent = "Invalid input";
    volumeEl.textContent = "Invalid input";
    kilogramsEl.textContent = "Invalid input";
    return;
  }

  let feetValue = convertMeterToFeet(baseValue);
  let meterValue = convertFeetToMeter(baseValue);
  let gallonValue = convertLiterToGallon(baseValue);
  let literValue = convertGallonToLiter(baseValue);
  let poundValue = convertKiloToPound(baseValue);
  let kiloValue = convertPoundToKilo(baseValue);

  lengthEl.textContent = `${baseValue} meters = ${feetValue.toFixed(3)} feet | ${baseValue} feet = ${meterValue.toFixed(3)} meters`;
  volumeEl.textContent = `${baseValue} liters = ${gallonValue.toFixed(3)} gallons | ${baseValue} gallons = ${literValue.toFixed(3)} liters`;
  kilogramsEl.textContent = `${baseValue} kilograms = ${poundValue.toFixed(3)} pounds | ${baseValue} pounds = ${kiloValue.toFixed(3)} kilograms`;
});

function convertMeterToFeet(meter) {
  return meter * meterToFeet;
}

function convertFeetToMeter(feet) {
  return feet / meterToFeet;
}

function convertLiterToGallon(liter) {
  return liter * literToGallon;
}

function convertGallonToLiter(gallon) {
  return gallon / literToGallon;
}

function convertKiloToPound(kilo) {
  return kilo * kiloToPound;
}

function convertPoundToKilo(pound) {
  return pound / kiloToPound;
}