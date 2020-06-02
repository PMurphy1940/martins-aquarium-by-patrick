/*
    This function will convert a single location object to an
    HTML representation and return it
*/
const locationConverter = (locationObject) => {

    const locationHTMLRepresentation = `
        <div class="location__cards">
            <div class="">
                <img class="location__picture" src="${locationObject.imgUrl}"
                    alt="${locationObject.name}" />
            </div>
            <div class="location__details">
                <ul class="location__details__list">
                    <li>Common fish: ${locationObject.commonFish}</li>
                    <li>Weather: ${locationObject.weather}</li>
                    <li>Name: ${locationObject.name}</li>
                    <li>Dive equipment: ${locationObject.equipment}</li>
                    <li>Legality: ${locationObject.legality}</li>
                </ul>
            </div>
        </div>`

    return locationHTMLRepresentation
}