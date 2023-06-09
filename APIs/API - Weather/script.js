let appId = '10285525e9efaa4f6acdc48273675e0b';
let units = 'metric';
let searchMethod = 'q';
let defaultCity = 'Bitola, mk';
let cityHeader = document.getElementById('cityHeader');

function searchWeather(searchTerm) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appid=${appId}&units=${units}&lang=mk`)
        .then((result) => {
            return result.json();
        }).then((res) => {
        init(res);
    });
}

function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.getElementById("weatherContainer").style.backgroundImage = "url('../APIs/API - Weather/clearPicture.gif')";
            break;

        case 'Clouds':
            document.getElementById("weatherContainer").style.backgroundImage = "url('../APIs/API - Weather/cloudyPicture.gif')";
            break;

        case 'Rain':
        case 'Drizzle':
            document.getElementById("weatherContainer").style.backgroundImage = "url('../APIs/API - Weather/rainPicture.gif')";
            break;

        case 'Mist':
            document.getElementById("weatherContainer").style.backgroundImage = "url('../APIs/API - Weather/mistPicture.gif')";
            break;

        case 'Thunderstorm':
            document.getElementById("weatherContainer").style.backgroundImage = "url('../APIs/API - Weather/stormPicture.gif')";
            break;

        case 'Snow':
            document.getElementById("weatherContainer").style.backgroundImage = "url('../APIs/API - Weather/snowPicture.gif')";
            break;

        default:
            break;
    }

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');



    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176;';
    cityHeader.innerHTML = resultFromServer.name;


    setPositionForWeatherInfo();
}

function setPositionForWeatherInfo() {
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`;
    weatherContainer.style.visibility = 'visible';
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=${units}&lang=mk`)
            .then((result) => {
                return result.json();
            }).then((res) => {
            init(res);
        });
    }, function() {
        searchWeather(defaultCity);
    });
} else {
    searchWeather(defaultCity);
}
