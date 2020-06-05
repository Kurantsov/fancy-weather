function getCityName() {
  const input = document.querySelector('.input__city');
  return input.value;
}


async function serverRequest(cityName) {
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a4d19601717c7d366eca6b925b3a692e`);
  return request.json();
}

async function addWeatherInformation() {
  /** @namespace data.main.temp, @namespace data.weather[0]['description'] * */
  /** @namespace data.weather[0]['description'] * */
  const requestJSON = await serverRequest(getCityName());
  document.querySelector('.city__name').innerHTML = requestJSON.name;
  document.querySelector('.temperature__today').innerHTML = `${Math.round(requestJSON.main.temp - 273).toString()}&deg`;
  document.querySelector('.weather__description').innerHTML = requestJSON.weather[0].description;
  document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${requestJSON.weather[0].icon}@2x.png`;
}


function startSearch() {
  const start = document.querySelector('.buttons_search');
  start.onclick = () => {
    addWeatherInformation();
  };
}

startSearch();

export default addWeatherInformation();
