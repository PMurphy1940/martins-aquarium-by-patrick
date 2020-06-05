/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// show/hide entire Fish Collection element

const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")

   fishButtonStatus = document.querySelector(".fishList").classList
   fishButtonHTML = document.querySelector(".toggleFish")

   if (fishButtonStatus == "fishList hidden") {
       fishButtonHTML.innerHTML = `<div>Show Fish</div>`
     }
   else if (fishButtonStatus == "fishList") {
    fishButtonHTML.innerHTML = `<div>Hide Fish</div>`
    }
   else {
        fishButtonHTML.innerHTML = `<div>What the hell</div>`
   }
   
})


//  show/hide fish types Select Element


const fishTypeDropdown = document.querySelector(".typeChoice")

const clearFishList = () => contentTarget.innerHTML = ""
const contentTarget = document.querySelector(".fishInsert")

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }
    else if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    }
    else if (userChoice === "plebs") {
        clearFishList()
        showRegularFish()
    }
    else if (userChoice === "all") {
        clearFishList()
        fishList()
    }
    else if (userChoice === "noFish") {
        clearFishList()
    }
})

// Display fish type "Holy", "Soldier", "Regular"

const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()
    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = holyFishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishInsert")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()
    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = soldierFishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishInsert")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const showRegularFish = () => {
    const fishObjectsArray = nonholyfish()
    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = regularFishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishInsert")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    showHolyFish()
    showSoldierFish()
    showRegularFish()
}