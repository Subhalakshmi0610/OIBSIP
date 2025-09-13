document.getElementById('convertBtn').addEventListener('click', function() {
  const value = document.getElementById('tempInput').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const output = document.getElementById('output');
  if (!value || isNaN(value)) {
    output.innerHTML = "Please enter a valid number.";
    return;
  }
  const temp = parseFloat(value);
  let resultHTML = "";
  if (unit === "C") {
    resultHTML = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F<br/>Kelvin: ${(temp + 273.15).toFixed(2)}K`;
  } else if (unit === "F") {
    resultHTML = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C<br/>Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
  } else if (unit === "K") {
    resultHTML = `Celsius: ${(temp - 273.15).toFixed(2)}°C<br/>Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
  }
  output.innerHTML = resultHTML;
});