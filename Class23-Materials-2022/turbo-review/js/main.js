// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const sentence = "What is going on here"
if (sentence.includes("?")) {
    alert("Eureka")
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const words = " I am jn developer hoping to join the kings guard";
let newWords = words.replace("jn developer", "software engineer")
console.log(newWords)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
    let num = Math.random()
    if (num < .33) {
        return "rock"
    } else if (num < .66) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(rockPaperScissor())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function gamePlay(choice) {
    if (choice === rockPaperScissor()) {
        console.log("This round was a tie")
    } else if ((choice == "paper" && rockPaperScissor() == "rock") ||
        (choice == "rock" && rockPaperScissor() == "scissors") ||
        (choice == "scissors" && rockPaperScissor() == "paper")) {
        console.log("You win")
    } else {
        console.log("YOu lose")
    }

}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
//Print the results of each game to the console.

multiPlay = (arr) => {
    arr.forEach(element => {
        gamePlay(element)
    });
}


let setOfPlay = ["paper", "paper", "rock", "scissors"]