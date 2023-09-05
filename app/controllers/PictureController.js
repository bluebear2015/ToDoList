import { AppState } from "../AppState.js";
import { Picture } from "../models/Picture.js";
import { pictureService } from "../services/PictureService.js";
import { logger } from "../utils/Logger.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
Picture


function _drawPicture() {

  const picture = AppState.pictures
  document.body.style.backgroundImage = `url(${picture.imgUrl})`
  document.getElementById('offcanvasRight').style.backgroundImage = `url(${picture.imgUrl})`

  // setHTML('pictureInfo', picture.PictureTemplate)
}


export class PictureController {

  constructor() {
    this.getPictureFromApi()
    // console.log('pic controller');
    AppState.on('pictures', _drawPicture)

  }

  async getPictureFromApi() {
    try {
      await pictureService.getPictureFromApi()
    } catch (error) {
      logger.error('[ERROR]', error)
      Pop.error(error.message)
    }
  }



}