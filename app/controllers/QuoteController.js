import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quoteService } from "../services/QuoteService.js";
import { logger } from "../utils/Logger.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuote() {

  let newQ = AppState.quotes
  console.log(newQ);


}



export class QuoteController {

  constructor() {
    AppState.on('quotes', _drawQuote)

    this.getQuoteFromApi()
    console.log('quote controller');

  }

  async getQuoteFromApi() {
    try {
      await quoteService.getQuoteFromApi()
    } catch (error) {
      logger.error('[ERROR]', error)
      Pop.error(error.message)
    }
    _drawQuote()
  }


}