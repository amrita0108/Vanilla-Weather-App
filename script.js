//Challenge 2 week 4

let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();

document.querySelector("#day-time").innerHTML = `${day} ${hour}:${minute}`;

//Challenge 1 week 5

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#tempareture").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity() {
  let city = document.querySelector("#search-input").value;
  let apiKey = "b08d4809006590d0d73e79b9c80c7934";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let enterCity = document.querySelector("#city-form");
enterCity.addEventListener("click", searchCity);
