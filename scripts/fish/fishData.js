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
        imgUrl: "https://m.liveaquaria.com/images/categories/large/lg_24046_Humu_Picasso_Triggerfish.jpg"
    },
    {
        species: "Yellow Tang",
        length: 5,
        name: "Manos",
        location: "fji",
        food: "Prime Reef, Green algae",
        imgUrl: "https://cdn.krakencorals.co.uk/catalog/product/cache/5b4864d46c569d4022d80dca7b46b5d4/_/y/_y_e_yellow_tang_6.jpg"
    },
    {
        species: "Percula Clown",
        length: 2,
        name: "Mitsy and Bitsy",
        location: "Great Barrier Reef",
        food: "Prime Reef",
        imgUrl: "https://cdn.krakencorals.co.uk/catalog/product/cache/5b4864d46c569d4022d80dca7b46b5d4/c/l/clownpair.jpg"
    },
    {
        species: "Mandarin Goby",
        length: 3,
        name: "Dot Wiggin",
        location: "Sea of Japan",
        food: "Brine shrimp, Copepods, Cyclops",
        imgUrl: "https://shop.r10s.jp/chanet/cabinet/483/48039-1.jpg"
    },
    {
        species: "Flame Goby(Purple Firefish)",
        length: 4,
        name: "Larry, Curly, Moe, and Shemp",
        location: "Fiji",
        food: "Prime Reef",
        imgUrl: "https://cdn.krakencorals.co.uk/catalog/product/cache/5b4864d46c569d4022d80dca7b46b5d4/s/h/shutterstock_483526762.jpg"
    },
    {
        species: "Blue Girdled Angelfish",
        length: 7,
        name: "Captain Hook",
        location: "Sea of Japan",
        food: "Great Barrier Reef",
        imgUrl: "https://www.liveaquaria.com/images/categories/product/lg_1113171%20111.jpg"
    },
    {
        species: "Flame Angelfish",
        length: 4,
        name: "Ready",
        location: "Phillippines",
        food: "Prime Reef",
        imgUrl: "https://m.liveaquaria.com/images/categories/large/lg_66284_Flame_Angelfish.jpg"
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
        imgUrl: "data:image/jpeg;base64,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"
    },
    {
        species: "King Angel",
        length: 9,
        name: "Arthur",
        location: "Great Barrier Reef",
        food: "Prime Reef",
        imgUrl: "https://www.aquariumofpacific.org/images/made/images/olc/king-angelfish_530_488_80auto_s.jpg"
    },
    {
        species: "Regal Angel",
        length: 7,
        name: "Victoria",
        location: "Great Barrier Reef",
        food: "Prime Reef",
        imgUrl: "https://cdn.krakencorals.co.uk/catalog/product/cache/5b4864d46c569d4022d80dca7b46b5d4/s/h/shutterstock_598583180.jpg"
    },
    {
        species: "McCosker's Wrasse",
        length: 4,
        name: "Bart",
        location: "Sea of Japan",
        food: "Prime Reef",
        imgUrl: "https://blog.marinedepot.com/wp-content/uploads/2018/09/McCosker-2.jpg"
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

