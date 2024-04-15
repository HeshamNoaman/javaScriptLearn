const weatherInfo = document.getElementById('weatherInfo');
const city = document.getElementById('city');
const weatherForm = document.getElementById('weatherForm');

weatherForm.addEventListener('submit', showWeatherDetails);

function showWeatherDetails(event) {
    event.preventDefault();

    const enteredCity = city.value;

    if (enteredCity.trim() == '') {
        alert('pleas enter a valued value');
        return;
    }

    const apiKey = '8f18e09d61db739bb4da3cdecbbb1ecc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}`;

    weatherInfo.innerHTML = '<h2>loading........</h2>';

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
