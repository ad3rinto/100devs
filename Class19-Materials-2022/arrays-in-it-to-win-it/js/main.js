//Create an array of movies with at least three movies.
let listOfMovies = ["Bring it on", "Domitilla", "orunmooru", "igbalandogi"]

//Using the array from above, store the first movie in a variable
let fav = listOfMovies[2];

//Get the length of the original array and store it in a new variable

const movieTotal = listOfMovies.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = listOfMovies[movieTotal - 1];

console.log(lastMovie)