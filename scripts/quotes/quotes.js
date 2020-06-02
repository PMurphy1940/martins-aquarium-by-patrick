/*
    This function will convert a single quote object to an
    HTML representation and return it
*/
const quoteConverter = (quoteObject) => {

    const quoteHTMLRepresentation = `
        <article class="quoteList">
                <img class="${quoteObject.authorLastName}" src="${quoteObject.imgUrl}"
                    alt="${quoteObject.authorFirstName} ${quoteObject.authorLastName}" />
                <section class="quote">“${quoteObject.quote}”<br> – <em>${quoteObject.authorFirstName} ${quoteObject.authorLastName}</em>
                </section> 
        </article>`

    return quoteHTMLRepresentation
}
