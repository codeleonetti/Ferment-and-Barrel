class Brewery {
    constructor(id, img, name, location){
        this.id = id
        this.img = img
        this.name = name
        this.location = location
        
        this.renderBrewery()
    }

    renderBrewery(){
        const breweryList = document.getElementById("brewery-list")
        const breweryContainer = document.createElement("div")
        breweryContainer.dataset.id = this.id
        breweryContainer.id = this.id
        breweryContainer.classList.add = "breweries"
        breweryContainer.innerHTML += this.showHTML()
        breweryList.append(breweryContainer)
    }

    showHTML(){
        return `
        <img src="${this.img}">
        <h3 class="brewery">${this.name}</h3></a>
        <p>Location: ${this.location}</p>
        <button type="button" class="beer-button" data-id=${this.id}>Beers!</button>
        `
    }
}