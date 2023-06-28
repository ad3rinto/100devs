//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


// let inputData = document.querySelector("input").value


const populate = () => {

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
                document.getElementById("here").appendChild(node)
                let image = document.createElement("img")
                image.src = data.drinks[i].strDrinkThumb
                document.getElementById("here").appendChild(image)
                // document.querySelector("h2").innerText = data.drinks[i].strDrink;
                // document.querySelector("p").innerText = data.drinks[i].strInstructions;
                // document.querySelector("img").src = data.drinks[i].strDrinkThumb;
            }
        })


        .catch(err => {
            console.log(`error ${err}`)
        });



}


document.querySelector("button").addEventListener("click", populate)