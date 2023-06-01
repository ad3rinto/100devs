//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = "https://dog.ceo/api/breeds/image/random";



handleClick = () => {
    document.querySelector("#test").innerHTML = "<h2>Hello</h2>";
}

document.querySelector('h1').addEventListener('click', handleClick);


async function fetchDogLists() {
    const response = await fetch(url);
    const jsonData = await response.json();
    let image = jsonData["message"]
    console.log(image);
    let dogImages = document.createElement('IMG');
    dogImages.src = image;
    document.querySelector('#test').append(dogImages)
    document.querySelector("img").src = image;
}

fetchDogLists();
