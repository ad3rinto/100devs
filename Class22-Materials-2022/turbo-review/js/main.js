// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
//Make sure there is no whitespace on either side of the string, and print the value to the console
// let favDrink = "monster"
// console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// const word = "an apple a day makes jack a dull boy";
// let check = word.includes("apple")
// console.log(check)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let result = Math.random()
    if (result > .6) {
        return "paper"
    } else if (result < .3) {
        return "rock"
    } else {
        return "scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won
//a game of rock paper scissors against a bot using the above function

function lottery(entry) {
    if (entry == rockPaperScissors()) {
        console.log("You are a winner")
    } else {
        console.log("Try one more time")
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array.
//Print the results of each game to the console.
let choiceArr = ["rock", "paper", "rock", "scissors", "scissors", "paper"];

function playGame(arr) {
    // let len = arr.length;
    // for (let i = 0; i < len; i++) {
    //     lottery(arr[i])
    arr.map(x => lottery(x))
}


playGame(choiceArr)