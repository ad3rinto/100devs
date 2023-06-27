//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = "https://dog.ceo/api/breeds/image/random";

async function logJSONData() {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    document.querySelector("img").src = jsonData.message
}

logJSONData()