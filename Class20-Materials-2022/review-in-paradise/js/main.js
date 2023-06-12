// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "amala";
favFood = "yam and beans"

console.log(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// let favString = "We want to do something";
// alert(favString[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const takeThree = (num1, num2, num3) => {
    alert((num1 / num2) * num3)
}

// takeThree(10, 5, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeCaller = (num1) => {
    console.log(Math.cbrt(num1))
}

cubeCaller(216)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

function monthChecker(month) {
    if (month.toLowerCase() === "june" || month.lower === "july" || month.lower === "august") {
        alert("Yayyyyyy")
    } else {
        alert("Boooo")
    }
}

monthChecker("january")
//*Loops*

//Create a function that takes in a number. 
//Console log every number from 1 to that number while skipping multiples of 5.

function takeInNumber(num1) {
    let i = 1;
    while (i <= num1) {
        if (i % 5 != 0) {
            console.log(i)
        }
        i++;
    }
}