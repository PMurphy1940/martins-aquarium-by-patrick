let locationCollection = []


const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfLocation) => {
                locationCollection = arrayOfLocation
            }
        )
}









// {
    //     commonFish: "Clownfish, triggerfish, tangs",
    //     weather: "Sunny and pleasant",
    //     name: "Fiji",
    //     equipment: "Standard tank and mask",
    //     legality: "Permit required",
    //     imgUrl: "images/fiji.png"
    // },
    // {
    //     commonFish: "Clownfish, parrotfish, tangs",
    //     weather: "Sunny and pleasant",
    //     name: "The Carribean sea",
    //     equipment: "Standard tank and mask",
    //     legality: "Permit required",
    //     imgUrl: "images/Carribean-sea.png"
    // },
    // {
    //     commonFish: "Angelfish, clownfish, wrasse",
    //     weather: "Hot and humid",
    //     name: "The Great Barrier Reef",
    //     equipment: "Snorkel",
    //     legality: "Strictly illegal",
    //     imgUrl: "images/Great-Barrier-Reef.jpg"
    // },
    // {
    //     commonFish: "Angelfish, lionfish, wrasse",
    //     weather: "Temperate",
    //     name: "Sea of Japan",
    //     equipment: "Deep dive",
    //     legality: "Permit required",
    //     imgUrl: "images/Japan-sea.png"
    // }