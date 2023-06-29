//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const api_key = "wdxVy89eEPHYi2rNphffgTQr8dN2EPiDD9U2vK9F";
const todayDate = new Date()
console.log(todayDate)

const getPhoto = () => {

    const url = `https://api.nasa.gov/planetary/apod`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}
