function startSearch() {
  const start = document.querySelector('.buttons_search');
  start.onclick = () => {
    // eslint-disable-next-line no-use-before-define
    getWeatherInformation(getCityName());
  };
}

startSearch();

function getCityName() {
  const input = document.querySelector('.input__city');
  return input.value;
}

function getWeatherInformation(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a4d19601717c7d366eca6b925b3a692e`)
    .then((response) => response.json())
  /** @namespace data.main.temp, @namespace data.weather[0]['description'] * */
  /** @namespace data.weather[0]['description'] * */
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log(data);
      document.querySelector('.city__name').innerHTML = data.name;
      document.querySelector('.temperature__today').innerHTML = `${Math.round(data.main.temp - 273).toString()}&deg`;
      document.querySelector('.weather__description').innerHTML = data.weather[0].description;
      const icon = document.createElement('img');
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector('.weather__icon').appendChild(icon);
    });
}

// google API = AIzaSyAQd43_QA0uYHpJCAZFvxrnG5kqyaVZtx4
