const temperature = parseFloat(document.getElementById("temperature").innerHTML);

const windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
const windChill = document.getElementById("windChill");

console.log(temperature)
console.log(windSpeed)

if (temperature <= 50 || windSpeed < 3) {

    const windChill_f = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed**0.16) + (0.4275 * temperature * windSpeed**0.16);
    windChill.innerHTML = Math.round(windChill_f);

}

else {
    windChill.innerHTML = "N/A";
}