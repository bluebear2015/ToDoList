import { HomeController } from "./controllers/HomeController.js";
import { NoteController } from "./controllers/NoteController.js";
import { PictureController } from "./controllers/PictureController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { WeatherController } from "./controllers/WeatherController.js";




export const router = [
  {
    path: '',
    controller: [NoteController, PictureController, QuoteController, WeatherController]
  },

  // {
  //   path: '',
  //   controller: WeatherController
  // }


]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */