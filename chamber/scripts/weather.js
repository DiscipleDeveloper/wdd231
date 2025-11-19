const weatherSection = document.querySelector("#weather-now");
const weatherDays = document.querySelector("#days-weather");
const iconToday = document.querySelector("#icon-today");
const weatherNowStatus = document.querySelector("#weather-now-status");
const dayOne = document.querySelector("#day-one");
const dayTwo = document.querySelector("#day-two");
const dayThree = document.querySelector("#day-three");

const lat = 16.876151707304082;
const lon = 121.59146213626688;
const apiKey = 'b76e5e106c8c39e4004b1a9db8bbcafd';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function fetchWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const weatherData = await response.json();
            console.log(weatherData);
            displayWeather(weatherData);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.error(error);
    }
}
fetchWeatherData();


function displayWeather(weatherData) {
    weatherSection.innerHTML = `${weatherData.list[2].main.temp}&degC`;
    
    let iconImg = weatherData.list[2].weather[0].icon;

    let iconT = document.createElement("img");
    iconT.setAttribute('src', `https://openweathermap.org/img/wn/${iconImg}@4x.png`)
    iconT.setAttribute('alt', "Icon that shows the status of the weather.")
    iconToday.appendChild(iconT);

    weatherNowStatus.textContent = weatherData.list[4].weather[0].description;

    threeDaysWeather(weatherData.list[10], dayOne);
    threeDaysWeather(weatherData.list[18], dayTwo);
    threeDaysWeather(weatherData.list[26], dayThree);

    function threeDaysWeather(data, dayElementContainer) {
        let date = new Date(data.dt * 1000);
        let dayName = date.toLocaleDateString("en-US", { weekday: "long" });

        let day = document.createElement("h4");
        let icon = document.createElement("img");
        let desc = document.createElement("p");
        let temperature = document.createElement("p");

        day.textContent = dayName;

        icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
        icon.setAttribute("alt", "Icon image of the temperature and weather of the named day.");
        icon.setAttribute("height", "100");
        icon.setAttribute("width", "100");
        icon.setAttribute("loading", "lazy");

        desc.textContent = data.weather[0].description;

        temperature.innerHTML = `${data.main.temp}&deg;C`;

        dayElementContainer.appendChild(day);
        dayElementContainer.appendChild(icon);
        dayElementContainer.appendChild(desc);
        dayElementContainer.appendChild(temperature);
    }
}