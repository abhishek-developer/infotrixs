document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const defaultCity = 'London';

    // Initial call to display weather for the default city
    getWeather(defaultCity);

    function getWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cityName = data.name;
                const temperature = data.main.temp;

                updateWeather(cityName, temperature);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    function updateWeather(cityName, temperature) {
        document.getElementById('city-name').textContent = cityName;
        document.getElementById('temperature').textContent = `${temperature} °C`;
    }
});
