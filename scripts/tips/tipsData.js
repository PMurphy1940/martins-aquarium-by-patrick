let tipCollection = []

const getTipData = () => {
    return fetch("http://localhost:8088/tips").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfTip) => {
                tipCollection = arrayOfTip
            }
        )
}









// {
    //     tip: "The most important need that any creature has is the need for food. I prefer the frozen options."
    // },
    // {
    //     tip: "A happy fish is a healthy fish. Provide a natural setting with many hiding spots so your fish can feel safe."
    // },
    // {
    //     tip: "Only bad things happen fast in an aquarium. Keep your salinity stable at 32ppt. Keep the temperature stable 76-79 degrees. Keep your light timing consistent, around 12 to 14 hours a day."
    // }