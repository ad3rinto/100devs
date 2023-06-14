// *Variables*
// Declare a variable, reassign it to your fav holiday, 
//make sure it is in all caps, and print the value to the console

// let favHoliday;
// favHoliday = "Christmas";
// console.log(favHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string
//(Use your google-fu and the MDN)

// let word = "Christ"
// alert(word.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100.
//Alert the absolute value of the difference. Call the function.

function fiver(a, b, c, d, e) {
    let result = 100 - a - b - e - c - d
    alert(Math.abs(result))
}

fiver(45, 5, -5, -250, 10)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function minMax(a, b, c) {
    let list = [a, b, c]
    let maxValue = 0;
    let minValue = 100000000;
    list.forEach(element => {
        if (element > maxValue) {
            maxValue = element;
        } else if (element < minValue) {
            minValue = element;
        }
    });
    console.log(minValue, maxValue)

} minMax(540, -32, -44)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headOrTail() {
    let x = (Math.random() * 2)
    return x >= 1 ? "head" : "Tail"
}


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails
//using the previous function x times where x is the number passed into the function. Call the function.


function ticker(x) {

    for (let i = 0; i < x; i++) {
        console.log(i, headOrTail())
    }
}