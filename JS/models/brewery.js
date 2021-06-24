
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
        breweryContainer.addEventListener("click", e =>{ console.log("I just got clicked yup")
            if (e.target.className === "beer-button") 
            {console.log(e);this.getBeer(e)}
            if (e.target.className === "delete-button"){
                this.deleteBrewery(breweryContainer.id)}
        })
        breweryList.append(breweryContainer)
    }

    showHTML(){
        return `
        <div class="brewery-line floatable marginable">
            <div class="brewery-image">
                <img src="${this.img}">
                <button type="button" class="beer-button" data-id=${this.id}>Beers!</button>
                <button type="button" class="delete-button" data-id=${this.id}>Delete</button>
            </div>
            <div class="brewery-text">
                <h3 class="brewery">${this.name}</h3>
                <p>Location: ${this.location}</p>
            </div>
            <div class="beer-list floatable marginable">
            </div>
            
        </div>
        `
    }

    getBeer(e){
        let id = e.target.dataset.id
        const beerList = document.getElementById("beer-list")
        beerList.innerHTML = ""
            fetch(`http://localhost:3000/breweries/${id}/beers`)
            .then(resp => resp.json())
            .then(beers => {
                beers.forEach(beer => {
                    const{id, name, style, img, abv, ibu, brewery_id} = beer
                    new Beer(id, name, style, img, abv, ibu, brewery_id)
                })
            
            })
    }

   static createBrewery(){

        const newBreweryContainer = document.getElementById("submit")
        
        newBreweryContainer.addEventListener("click", e => { console.log(e)
            e.preventDefault()
            {
                const newImage = document.getElementById("image")
                const newName = document.getElementById("name")
                const newLocation = document.getElementById("location")
                let json = JSON.stringify({
                    "img": newImage.value,
                    "name": newName.value,
                    "location": newLocation.value
                })
              
         API.postNewBrewery(json)
         newImage.value=""
         newName.value=""
         newLocation.value=""
            }
        })
    }

    deleteBrewery(id){
        // const id = event.target.dataset.id
        const byeBrewery = document.getElementById("delete-button")
        const breweryDeleted = document.getElementById(id)
        console.log(breweryDeleted)
        fetch(`http://localhost:3000/breweries/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then( breweryDeleted.remove())      
          
    }

    

}