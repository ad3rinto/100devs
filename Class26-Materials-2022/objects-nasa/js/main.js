//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// import { api_key } from "../key.js";

const api_key = "";
document.querySelector("button").addEventListener("click", getPhoto)


function getPhoto() {
    let requestedDate2 = document.querySelector("input").value

    const url = `https://api.nasa.gov/planetary/apod?date=${requestedDate2}&api_key=${api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.url)
            document.querySelector("h2").innerHTML = data.title
            document.querySelector("img").src = data.url
            document.querySelector("h3").innerHTML = data.explanation

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}
