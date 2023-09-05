import { AppState } from "../AppState.js";
import { PictureController } from "../controllers/PictureController.js";
import { Picture } from "../models/Picture.js";
import { api } from "./AxiosService.js";



class PictureService {



  async getPictureFromApi() {
    const res = await api.get('api/images')
    // console.log( res.data)

    let picInfo = res.data
    AppState.pictures = picInfo
    console.log(picInfo);
  }

}

export const pictureService = new PictureService