class API {
    static breweryData(){
        fetch("http://localhost:3000/breweries")
        .then(resp => resp.json())
        .then(breweries =>{
            
            breweries.forEach(brewery => {
                const{id, img, name, location} = brewery
                new Brewery(id, img, name, location)
            })
        })
        
    }

    static postNewBrewery(json){
        fetch ( "http://localhost:3000/breweries",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: json
           

        })
        .then(response => response.json())
        .then(newbrew => {console.log(newbrew);
            const{id, img, name, location} = newbrew
            new Brewery(id, img, name, location)
        })
     console.log("what ever")   
    }

   
   
}