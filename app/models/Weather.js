import { AppState } from "../AppState.js";


export class Weather {
  constructor(data) {
    this.weather = data.weather[0].main
    this.tempKelvin = data.main.temp;
    this.tempCelsius = this.tempKelvin - 273.15;
    this.tempFahrenheit = (this.tempKelvin - 273.15) * 9 / 5 + 32;
    this.showF = data.showF || true

  }

  get WeatherTemplate() {
    return `
<span class="text-dark">Temperature: 
<span type="button" onclick="app.WeatherController.toggleWeather()" class="text-danger">  ${this.tempTemplate}</span>
   <span class="text-primary"> ${this.weather}</span>
  </span>

`

  }

  get tempTemplate() {
    if (this.showF) {
      return `${this.tempFahrenheit.toFixed(2)}°F`
    }
    return `${this.tempCelsius.toFixed(2)}°C`

  }

}