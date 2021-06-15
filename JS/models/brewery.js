class Brewery {
    constructor(id, name, location, img){
        this.id = id
        this.name = name
        this.location = location
        this.img = img
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
        <a href="${img}"><h3 class="brewery">${this.name}</h3></a>
        <p>Location: ${this.location}</p>
        `
    }
}