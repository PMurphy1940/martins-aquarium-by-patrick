let quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfQuote) => {
                quoteCollection = arrayOfQuote
            }
        )
}














// {
    //     quote: "I love fools’ experiments. I am always making them.",
    //     authorFirstName: "Charles",
    //     authorLastName: "Darwin",
    //     imgUrl: "/images/Darwin.png"
    // },
    // {
    //     quote: "We are tied to the ocean. And when we go bak to the sea, whether to sail or to watch - we are going back to whence we came.",
    //     authorFirstName: "John F.",
    //     authorLastName: "Kennedy",
    //     imgUrl: "/images/JFK.png"
    // },
    // {
    //     quote: "You can't cross the sea merely by standing and staring at the water",
    //     authorFirstName: "Rabindranath",
    //     authorLastName: "Tagore",
    //     imgUrl: "/images/Rabindranath.png"
    // }