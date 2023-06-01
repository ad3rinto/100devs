//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = "https://dog.ceo/api/breeds/image/random";

async function fetchDogLists() {
    const response = await fetch(url);
    const jsonData = await response.json();
    let image = jsonData["message"]
    console.log(image);
    document.querySelector("img").src = image;
}

fetchDogLists();
