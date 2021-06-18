
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
        //breweryList.append(breweryContainer)
        breweryContainer.addEventListener("click", e =>{ console.log(e)
            if (e.target.className === "beer-button") 
            {console.log(e);this.getBeer(e)}
        })
        breweryList.append(breweryContainer)
    }

    showHTML(){
        return `
        <div class="brewery-line floatable marginable">
            <div class="brewery-image">
                <img src="${this.img}">
            </div>
            <div class="brewery-text">
                <h3 class="brewery">${this.name}</h3>
                <p>Location: ${this.location}</p>
            </div>
            <button type="button" class="beer-button" data-id=${this.id}>Beers!</button>
            <button type="button" class="edit-button" data-id=${this.id}>Edit Beer!</button>
            <div class="beer-list floatable marginable">
            </div>
            
        </div>
        `
    }

    getBeer(e){
        let id = e.target.dataset.id
            fetch(`http://localhost:3000/breweries/${id}/beers`)
            .then(resp => resp.json())
            .then(beers => {
                beers.forEach(beer => {
                    const{id, name, style, img, abv, ibu, brewery_id} = beer
                    new Beer(id, name, style, img, abv, ibu, brewery_id)
                })
            
            })
    }// need to get beer associated with each brewery
}