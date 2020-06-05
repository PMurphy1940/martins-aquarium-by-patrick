let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfFish) => {
                fishCollection = arrayOfFish
            }
        )
}

// displays fish type - Holy, Soldier, Regular
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
