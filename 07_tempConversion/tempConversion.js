const convertToCelsius = function(valueInFarenheit) {
  let valueInCelsius = (valueInFarenheit - 32) * (5 / 9);
  return Math.round(valueInCelsius * 10) / 10;
};

const convertToFahrenheit = function(valueInCelsius) {
  let valueInFarenheit = (valueInCelsius * (9/ 5)) + 32;
  return Math.round(valueInFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
