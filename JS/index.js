document.addEventListener("click", function(event){
    console.log("this was just clicked", event.tracker)
})

document.addEventListener("DOMContentLoaded", function(){
    API.breweryData()
    // API.getBeer()


    // Brewery.deleteBrewery()
    //const newBreweryContainer = document.getElementById("submit")
    Brewery.createBrewery()
})

