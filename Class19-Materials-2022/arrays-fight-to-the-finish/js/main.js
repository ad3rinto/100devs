//Create an array of movie titles. Loop through the array and each element to the h2.
let bondMovies = ["Live and let die", "The spy who loved me", "Goldfinger", "Golden Eye", "Die another day"]

for (let i = 0; i < bondMovies.length; i++) {
    document.querySelector("h2").innerText += bondMovies[i] + "\n"
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numArrays = [2, 4, 6, 66, 44, 34, 2, 8, 87];
let newNumArray = [];

// for (let i = 0; i < numArrays.length; i++) {
//     newNumArray.push(numArrays[i] + 30)

// }
// console.log(newNumArray)

numArrays.forEach((item, i) => {
    numArrays[i] = item + 3;
}
)


console.log(numArrays)


//Find the average of all the numbers from question three
let total = 0;
numArrays.forEach((item) => {
    total += item
}
)
let theAve = total / numArrays.length

console.log(theAve)