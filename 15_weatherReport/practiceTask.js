const weatherInfo = document.getElementById('weatherInfo');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');

function getWeatherInfo(event) {

    event.preventDefault();

    // validate input
    const lng = longitude.value.trim();
    const lat = latitude.value.trim();

    if (lng === '' || lat === '') {
        weatherInfo.innerText = 'please provide valid value';
        return;
    }

    const apiKey = '8f18e09d61db739bb4da3cdecbbb1ecc';
    // lon = 10.99
    // lat = 44.34
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML =
                `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}