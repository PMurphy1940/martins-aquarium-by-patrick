/*
Responsible for generating a list of quote HTML
representations, and putting in the browser
*/

const quoteVisibilityButton = document.querySelector(".toggleQuotes")

quoteVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".quote__container").classList.toggle("hidden")

    quoteButtonStatus = document.querySelector(".quote__container").classList
    quoteButtonHTML = document.querySelector(".toggleQuotes")
 
    if (quoteButtonStatus == "quote__container hidden") {
        quoteButtonHTML.innerHTML = `<div>Show Quotes</div>`
      }
    else if (quoteButtonStatus == "quote__container") {
     quoteButtonHTML.innerHTML = `<div>Hide Quotes</div>`
     }
    else {
         quoteButtonHTML.innerHTML = `<div>What the hell</div>`
    }
})



const quoteList = () => {
    // Iterate the collection of quote objects
    for (const currentQuoteObject of quoteCollection) {

        // Convert the current quote to its HTML representation
        const quoteHTML = quoteConverter(currentQuoteObject)

        // Find the <article> element in index.html
        const quoteArticleElement = document.querySelector(".quote__container")

        // Put the quote HTML representation inside the <article> element
        quoteArticleElement.innerHTML += quoteHTML
    }
}
