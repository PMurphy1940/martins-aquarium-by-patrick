/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// const fishList = () => {
//     // Iterate the collection of fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
        
//         // Put the fish HTML representation inside the <article> element
//         fishArticleElement.innerHTML += fishHTML
//     }
// }

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