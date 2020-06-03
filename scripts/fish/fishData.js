const fishCollection = [
    {
        species: "Parrot fish",
        length: 8,
        name: "Angus",
        location: "Sea of Japan",
        food: "Popcorn",
        imgUrl: "images/Parrotfish.png"
    },
    {
        species: "Huma Huma Trigger",
        length: 6,
        name: "Torgo",
        location: "Fiji",
        food: "Prime Reef",
        imgUrl: "images/Humu_Picasso_Triggerfish.jpg"
    },
    {
        species: "Yellow Tang",
        length: 5,
        name: "Manos",
        location: "fji",
        food: "Prime Reef, Green algae",
        imgUrl: "images/yellowtang.png"
    },
    {
        species: "Percula Clown",
        length: 2,
        name: "Mitsy and Bitsy",
        location: "Great Barrier Reef",
        food: "Prime Reef",
        imgUrl: "images/perculaclowns.png"
    },
    {
        species: "Mandarin Goby",
        length: 3,
        name: "Dot Wiggin",
        location: "Sea of Japan",
        food: "Brine shrimp, Copepods, Cyclops",
        imgUrl: "images/mandaringoby.jpg"
    },
    {
        species: "Flame Goby(Purple Firefish)",
        length: 4,
        name: "Larry, Curly, Moe, and Shemp",
        location: "Fiji",
        food: "Prime Reef",
        imgUrl: "images/purplefirefish.png"
    },
    {
        species: "Blue Girdled Angelfish",
        length: 7,
        name: "Captain Hook",
        location: "Sea of Japan",
        food: "Great Barrier Reef",
        imgUrl: "images/blueangel.png"
    },
    {
        species: "Flame Angelfish",
        length: 4,
        name: "Ready",
        location: "Phillippines",
        food: "Prime Reef",
        imgUrl: "images/flameangel.webp"
    },
    {
        species: "Christmas Wrasse",
        length: 4,
        name: "Mr. Hanky",
        location: "Hawaii",
        food: "Prime Reef",
        imgUrl: "images/wrasse.png"
    },
    {
        species: "Lion fish",
        length: 15,
        name: "Spike",
        location: "Sea of Japan",
        food: "Other fish",
        imgUrl: "images/Lionfish.png"
    },

    {
        species: "Paddlefin Wrasse",
        length: 3,
        name: "Rainbow",
        location: "Fiji",
        food: "Prime Reef",
        imgUrl: "images/paddlefin-wrasse.jpeg"
    },
    {
        species: "King Angel",
        length: 9,
        name: "Arthur",
        location: "Great Barrier Reef",
        food: "Prime Reef",
        imgUrl: "images/kingangel.png"
    },
    {
        species: "Regal Angel",
        length: 7,
        name: "Victoria",
        location: "Great Barrier Reef",
        food: "Prime Reef",
        imgUrl: "images/regalangel.png"
    },
    {
        species: "McCosker's Wrasse",
        length: 4,
        name: "Bart",
        location: "Sea of Japan",
        food: "Prime Reef",
        imgUrl: "images/McCosker-2.jpg"
    }

]

const mostHolyFish = () => {
    const holyFish = []
    for (const fishOfThree of fishCollection) {
        if (fishOfThree.length % 3 === 0 ) {
            holyFish.push(fishOfThree)
       }
    } return holyFish
}
const soldierFish = () => {
    const soldierfishArray = []
    for (const soldierfishobject of fishCollection) {
        if (soldierfishobject.length % 5 === 0 && soldierfishobject.length % 3 !== 0) {
            soldierfishArray.push(soldierfishobject)
        }
    } return soldierfishArray
}
const nonholyfish = () => {
    const regularFish = []
    for (const unholy of fishCollection) {
        if (unholy.length % 3 !== 0 && unholy.length % 5 !== 0) {
           regularFish.push(unholy) 
        }
    } return regularFish
}

