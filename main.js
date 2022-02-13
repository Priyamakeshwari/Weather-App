const api = {
  key: "7512d79c63678b41872c80763ae1ef68",
  base: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode === 13) {
      getResults(searchbox.value);
  }
}
function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
          return weather.json();
      }).then(displayResults);
}
function displayResults(weather) {

  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let date = document.querySelector('.location .date');
  let d = new Date().toUTCString().slice(0, 16);

  date.innerText = d;
  let temp = document.querySelector('.current .temp');
  temp.innerText = `${Math.round(weather.main.temp)}°C `;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C /  ${Math.round(weather.main.temp_max)}°C`;
  console.log(weather.weather[0].icon)
  get_icon(weather);
  
}
function get_icon(weather) {
  let icon = document.querySelector('.uil');
  str = weather.weather[0].icon
  // Sunny
  if (str == "01d" || str == "01n") {
      
      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="01d.png">`
      }
      else {
          icon.innerHTML = `<img src="01n.png">`
      }
  }
  // Sunny - Cloudy 
  if (str == "02d" || str == "02n") {

      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="02d.png">`
      }
      else {
          icon.innerHTML = `<img src="02n.png">`
      }
  }
  if (str == "03d" || str == "03n") {
      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="03d.png">`
      }
      else {
          icon.innerHTML = `<img src="03n.png">`
      }
  }
  if (str == "04d" || str == "04n") {

      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="04d.png">`
      }
      else {
          icon.innerHTML = `<img src="04n.png">`
      }
  }
  if (str == "09d" || str == "09n") {

      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="09d.png">`
      }
      else {
          icon.innerHTML = `<img src="09n.png">`
      }
  }
  if (str == "10d" || str == "10n") {

      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="10d.png">`
      }
      else {
          icon.innerHTML = `<img src="10n.png">`
      }
  }
  if (str == "11d" || str == "11n") {

      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="11d.png">`
      }
      else {
          icon.innerHTML = `<img src="11n.png">`
      }
  }
  if (str == "13d" || str == "13n") {
      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="13d.png">`
      }
      else {
          icon.innerHTML = `<img src="13n.png">`
      }
  }
  if (str == "50d" || str == "50n") {
      if (str[str.length - 1] == "d") {
          icon.innerHTML = `<img src="50d.png">`
      }
      else {
          icon.innerHTML = `<img src="50n.png">`
      }
  }
}