import { AppState } from "../AppState.js";

import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";

class QuoteService {


    async getQuoteFromApi() {
        const res = await api.get('api/quotes')
        console.log(res.data)


        let mappedQuote = res.data
        AppState.quotes = mappedQuote
        console.log(mappedQuote);
    }

}

export const quoteService = new QuoteService