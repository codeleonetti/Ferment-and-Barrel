class API {
    static breweryData(){
        fetch("http://localhost:3000/breweries")
        .then(resp => resp.json())
        .then(breweries =>{
            breweries.forEach(brewery => {
                const{id, name, location, img} = brewery
                new Brewery(id, name, location, img)
            })
        })
    }
}