class Beer{
    constructor(id, name, style, img, abv, ibu, brewery_id){
        this.id = id
        this.name = name
        this.style = style
        this.img = img
        this.abv = abv
        this.ibu = ibu
        this.brewery_id = brewery_id
        this.getBeer()
    }

    showBeer(){
        return `
        <img src="${this.img}">
        <p> Beer:${this.name}</P>
        <p>Style: ${this.style}</p>
        <p>Abv: ${this.abv}</p>
        <p>Ibu: ${this.ibu}</p>
        <button type="button" class="beer-button" data-id=${this.id}>Beers!</button>
        `
    }



}