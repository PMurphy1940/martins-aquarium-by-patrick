/*
Responsible for generating a list of location HTML
representations, and putting in the browser
*/

const locationVisibilityButton = document.querySelector(".toggleLocation")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")

    locationButtonStatus = document.querySelector(".locationList").classList
    locationButtonHTML = document.querySelector(".toggleLocation")
 
    if (locationButtonStatus == "locationList hidden") {
        locationButtonHTML.innerHTML = `<div>Show Locations</div>`
      }
    else if (locationButtonStatus == "locationList") {
     locationButtonHTML.innerHTML = `<div>Hide Locations</div>`
     }
    else {
         locationButtonHTML.innerHTML = `<div>What the hell</div>`
    }
})


const locationList = () => {
    // Iterate the collection of location objects
    for (const currentLocationObject of locationCollection) {

        // Convert the current location to its HTML representation
        const locationHTML = locationConverter(currentLocationObject)

        // Find the <article> element in index.html
        const locationArticleElement = document.querySelector(".locationInsert")

        // Put the location HTML representation inside the <article> element
        locationArticleElement.innerHTML += locationHTML
    }
}
