const temperature = parseInt(document.getElementById("temperature").innerHTML);
// const temperature = 23;

const windSpeed = parseFloat(document.getElementById("windspeed").innerHTML);
const windChill = document.getElementById("windchill");

console.log(temperature)
console.log(windSpeed)

if (temperature <= 50 || windSpeed < 3) {

    const windChill_formula = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed**0.16) + (0.4275 * temperature * windSpeed**0.16);
    windChill.innerHTML = Math.round(windChill_formula);

}

else {
    windChill.innerHTML = "N/A";
}