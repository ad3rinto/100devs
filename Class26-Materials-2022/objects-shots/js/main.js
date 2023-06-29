//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


// let inputData = document.querySelector("input").value


// function to refresh page upon button click
const clearDrinksList = () => {
    const box1 = document.querySelectorAll("h2");
    box1.forEach(box => {
        box.remove()
    })
    const box2 = document.querySelectorAll("p");
    box2.forEach(box => {
        box.remove()
    })
    const box3 = document.querySelectorAll("img");
    box3.forEach(box => {
        box.remove()
    })
}

// function to enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const populate = () => {
    clearDrinksList()
    let inputData = document.querySelector("input").value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputData}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let len = data.drinks.length
            for (i = 0; i < len; i++) {
                let node = document.createElement("h2")
                node.innerHTML = data.drinks[i].strDrink;
                let inNode = document.createElement("p")
                inNode.innerHTML = "<p>" + data.drinks[i].strInstructions + "</p>";
                node.appendChild(inNode)
                document.querySelector("#here").appendChild(node)
                let image = document.createElement("img")
                image.src = data.drinks[i].strDrinkThumb
                document.querySelector("#here").appendChild(image)
            
            }
        })


        .catch(err => {
            console.log(`error ${err}`)
        });



}

document.querySelector("button").addEventListener("click", populate)
