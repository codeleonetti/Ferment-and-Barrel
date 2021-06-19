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
        beerList.innerHTML = "";
        const beerContainer = document.createElement("div")
        beerContainer.dataset.id = this.id 
        beerContainer.id = this.id
        beerContainer.classList.add = "beers"
        beerContainer.innerHTML += this.showBeer()
        beerContainer.addEventListener("click", e => {
            if(e.target.className === "edit-button")
            {console.log(e);this.getBeer(e)}
        })
        beerList.append(beerContainer)
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



    editBeer(e){

        const beerCollection = document.querySelector("#beer-list")

        beerCollection.addEventListener("click", event => {
            event.preventDefault();
            
            if(event.target.matches(".edit-button")) {
                const editForm = document.createElement("form")

                editForm.innerHTML = `
                
                <h3> Edit Beer <h3>
                <form class="edit-form">
                <br>
                <h5>Beer Name:</h5>
                <input type = "text" name="name"

                
                `
                console.log(editForm)
            }
        })
        const id = e.target.dataset>id
            fetch(`http://localhost:3000/beers/${id}`)
            .then(resp => resp(json))
            .then.then(console(log))
        

    }


}