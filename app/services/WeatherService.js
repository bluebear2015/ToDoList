import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";
Weather

class WeatherService {
    toggleWeather() {
        let temp = AppState.showF
        temp = false
        AppState.emit('showF')
    }




    async getWeatherFromApi() {
        const res = await api.get('api/weather')

        AppState.weather = new Weather(res.data)
        console.log(res.data);
        console.log(AppState.weather);

    }
}


export const weatherService = new WeatherService()