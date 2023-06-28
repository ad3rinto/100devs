//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


let inputData = document.querySelector("input").value


const populate = () => {

    let inputData = document.querySelector("input").value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputData}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector("h2").innerText = data.drinks[0].strDrink;
            document.querySelector("p").innerText = data.drinks[0].strInstructions;
            document.querySelector("img").src = data.drinks[0].strDrinkThumb;

        })
        .catch(err => {
            console.log(`error ${err}`)
        });



}


document.querySelector("button").addEventListener("click", populate)