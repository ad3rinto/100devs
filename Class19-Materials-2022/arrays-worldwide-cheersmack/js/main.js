//Create a function that takes in a number. 
// The function should return an array that contains every number from 1 to that number as seperate elements

function createArray(num) {
    let setOfArrays = [];
    for (let i = 1; i <= num; i++) {
        setOfArrays.push(i)
    }
    console.log(setOfArrays)
}


createArray(113)