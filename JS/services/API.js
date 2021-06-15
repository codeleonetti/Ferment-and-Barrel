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

    
            
   
}