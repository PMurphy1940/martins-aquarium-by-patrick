/*
Responsible for generating a list of tip HTML
representations, and putting in the browser
*/

//  show/hide "Tip list"

const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".underTheBanner__right").classList.toggle("hidden")

    tipButtonStatus = document.querySelector(".underTheBanner__right").classList
    tipButtonHTML = document.querySelector(".toggleTips")
 
    if (tipButtonStatus == "underTheBanner__right hidden") {
        tipButtonHTML.innerHTML = `Show Tips`
      }
    else if (tipButtonStatus == "underTheBanner__right") {
     tipButtonHTML.innerHTML = `Hide Tips`
     }
    else {
         tipButtonHTML.innerHTML = `Error`
    }
})



const tipList = () => {
    // Iterate the collection of tip objects
    for (const currentTipObject of tipCollection) {

        // Convert the current tip to its HTML representation
        const tipHTML = tipConverter(currentTipObject)

        // Find the <article> element in index.html
        const tipArticleElement = document.querySelector(".tipList")

        // Put the tip HTML representation inside the <article> element
        tipArticleElement.innerHTML += tipHTML
    }
}
