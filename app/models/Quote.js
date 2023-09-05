

export class Quote {


    constructor(data) {
        this.author = data.author
        this.content = data.content
        this.date = data.dateAdded
    }

    get quoteTemplate() {
        return `
        <div class="quoteAuthor glassCard text-dark">
          <h5 class="text-bold">${this.author} </h5>
         </div>
        
         <div class="quoteContent glassCard text-dark">
          <p>${this.content}</p>
        </div>
        
        `
    }

}