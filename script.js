const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const weatherInfo = document.getElementById('weather-info');
const locationElem = document.getElementById('location');
const descriptionElem = document.getElementById('description');
const temperatureElem = document.getElementById('temperature');

document.getElementById('get-weather').addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const location = data.name;

            locationElem.textContent = location;
            descriptionElem.textContent = `Weather: ${description}`;
            temperatureElem.textContent = `Temperature: ${temp} °C`;

            weatherInfo.style.display = 'block'; // Show weather info
        })
        .catch(error => {
            alert(error.message);
            weatherInfo.style.display = 'none'; // Hide weather info on error
        });
}
