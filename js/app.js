const API_KEY = `41b37461eeeaf480d61dae2accff05f0`;

const searchWeather = () => {
    const cityInput = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

// set inner text

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
    document.getElementById('city-name').value = '';
}

// display weather

const displayWeather = weather => {
    setInnerText('city', weather.name);
    setInnerText('temperature', Math.round(weather.main.temp));
    setInnerText('condition', weather.weather[0].main);
    // set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', iconUrl);
}
