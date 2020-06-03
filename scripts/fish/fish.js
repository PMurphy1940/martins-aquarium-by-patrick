/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const holyFishConverter = (fishObject) => {

    const fishHTMLRepresentation = `
        <div class="fish__cards__holy">
            <div class="">
                <img class="fish__picture" src="${fishObject.imgUrl}"
                    alt="${fishObject.name} the ${fishObject.species}" />
            </div>
            <div class="fish__details">
                <ul class="fish__details__list">
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}cm</li>
                    <li>Name: ${fishObject.name}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </div>`

    return fishHTMLRepresentation

}
const soldierFishConverter = (fishObject) => {

    const fishHTMLRepresentation = `
        <div class="fish__cards__soldier">
            <div class="">
                <img class="fish__picture" src="${fishObject.imgUrl}"
                    alt="${fishObject.name} the ${fishObject.species}" />
            </div>
            <div class="fish__details">
                <ul class="fish__details__list">
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}cm</li>
                    <li>Name: ${fishObject.name}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </div>`

    return fishHTMLRepresentation

}
const regularFishConverter = (fishObject) => {

    const fishHTMLRepresentation = `
        <div class="fish__cards__regular">
            <div class="">
                <img class="fish__picture" src="${fishObject.imgUrl}"
                    alt="${fishObject.name} the ${fishObject.species}" />
            </div>
            <div class="fish__details">
                <ul class="fish__details__list">
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}cm</li>
                    <li>Name: ${fishObject.name}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </div>`

    return fishHTMLRepresentation

}