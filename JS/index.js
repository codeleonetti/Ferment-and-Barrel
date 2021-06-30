document.addEventListener("click", function(event){
    console.log("this was just clicked", event.target)
})

document.addEventListener("DOMContentLoaded", function(){
    API.breweryData()
   
    Brewery.createBrewery()

  
    const searchBar = document.getElementById("searchBar");
    
    searchBar.addEventListener("keyup", e => {
       
        const searchString = e.target.value.toLowerCase();
        console.log(searchString)
        const filteredBreweries = Brewery.all.filter( brewery => {
            return (
            brewery.location.toLowerCase().includes(searchString)
            );
        })
        console.log(filteredBreweries)
        document.getElementById('brewery-list').innerHTML= ""
        filteredBreweries.forEach(brewery => {
            //console.log(brewery)
            document.getElementById('brewery-list').innerHTML += brewery.showHTML()
        })

    })

    

    // grab all breweries 
    // sort all breweries by  abc names

})


