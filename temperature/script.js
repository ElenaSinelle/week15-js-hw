'use strict'
//get weather from openweather
async function getWeather(city) {
  const item = city.closest('.weather__item');
  const temperature = item.querySelector('.temperature');
  const wind = item.querySelector('.wind');
  const humidity = item.querySelector('.humidity');
  const error = item.querySelector('.weather-error');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=39f3ac188021f7dc751132e456fa4fec&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (res.ok == false) {
    error.textContent = 'City not found';
    temperature.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;
  } else {
    error.textContent = '';
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    wind.textContent = `${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `${Math.round(data.main.humidity)}%`;
  }
}

//get city from user
const container = document.querySelector('.weather__container');
container.addEventListener('change', function(event) {
  let target = event.target;
  getWeather(target);
});

//calc min and max
let tempArr = document.querySelectorAll('.temperature');
let windArr = document.querySelectorAll('.wind');
let humidityArr =document.querySelectorAll('.humidity');

function calc(arr, definitor) {
  let arrFin = [...arr].map(item => parseInt(item.textContent)).filter(item => !isNaN(item));
  if (definitor === 'min') {
    return Math.min(...arrFin);
  } else if (definitor === 'max') {
    return Math.max(...arrFin);
  }
}

const minTemp = document.querySelector('.calc__min-temp');
const minWind = document.querySelector('.calc__min-wind');
const minHumidity = document.querySelector('.calc__min-humidity');

const maxTemp = document.querySelector('.calc__max-temp');
const maxWind = document.querySelector('.calc__max-wind');
const maxHumidity = document.querySelector('.calc__max-humidity');

const calcBtn = document.querySelector('.calc__button');

calcBtn.addEventListener('click', function () {
  minTemp.textContent = `${calc(tempArr, 'min')}°C`;
  minWind.textContent = `${calc(windArr, 'min')} m/s`;
  minHumidity.textContent = `${calc(humidityArr, 'min')}%`;

  maxTemp.textContent = `${calc(tempArr, 'max')}°C`;
  maxWind.textContent = `${calc(windArr, 'max')} m/s`;
  maxHumidity.textContent = `${calc(humidityArr, 'max')}%`;
})