// Create a function that takes in an array. If the first number, 
//is less than the last number, alert "Hi". 
//If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour".

function arrayDefender(arr) {
    if (arr[0] < arr[arr.length - 1]) {
        alert("Hi")
    } else if (arr[0] > arr[arr.length - 1]) {
        alert("Bye")
    } else {
        alert("Close in an hour")
    }
}

let bestColours = ["green", "blue", "black", "white"]

let newSamples = [];

bestColours.forEach((colour) => {

    newSamples.push(colour + "ish")
})

console.log(newSamples)