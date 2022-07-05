// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=ca5406abcf0416d657b4feeee309f20b`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


    function displayResults(weatherData) {
        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

      const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      const desc = weatherData.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.substring(1);

      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
      captionDesc.textContent = desc;
      }
