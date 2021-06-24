class Beer{
    constructor(id, name, style, img, abv, ibu, brewery_id){
        this.id = id
        this.name = name
        this.style = style
        this.img = img
        this.abv = abv
        this.ibu = ibu
        this.brewery_id = brewery_id
        this.renderBeer()
    }

    renderBeer(){
        const beerList = document.getElementById("beer-list")
        //beerList.innerHTML = "";
        const beerContainer = document.createElement("div")
        beerList.append(beerContainer)
        beerContainer.dataset.id = this.id 
        beerContainer.id = this.id
        beerContainer.classList.add = "beers"
        beerContainer.innerHTML += this.showBeer()
       
    }

    showBeer(){
        return `
        <div class="beer-text floatable marginable">
            <img class="floatable margin-right" src="${this.img}">
            <h4 class="floatable margin-right"> beer:${this.name}</h4>
            <p class="floatable margin-right">Style: ${this.style}</p>
            <p class="floatable margin-right">Abv: ${this.abv}</p>
            <p class="floatable margin-right">Ibu: ${this.ibu}</p>
            
        </div>
        `
    }

}