import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { logger } from "../utils/Logger.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function drawWeather() {
  const weather = AppState.weather

  setHTML('weatherBlock', weather.WeatherTemplate)
}
function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeString = `${hours - 12}:${padZero(minutes)}:${padZero(seconds)}`;

  document.getElementById('clock').textContent = timeString;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}



export class WeatherController {
  constructor() {
    console.log('Weather Controller');
    AppState.on('account', drawWeather)
    AppState.on('showF', this.toggleWeather)
    this.getWeatherFromApi()
    setInterval(updateClock, 1000)
  }

  async getWeatherFromApi() {
    try {
      await weatherService.getWeatherFromApi()
    } catch (error) {
      logger.error('[ERROR]', error)
      Pop.error(error.message)
    }

  }

  async toggleWeather() {
    try {
      await weatherService.toggleWeather()
    } catch (error) {
      logger.error
    }
    console.log(AppState.showF);
  }


}
