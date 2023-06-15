//Arrays

//Create and array of tv shows. Loop through and print each show to the console
// const favShows = ["Game of thrones", "24", "Prison break", "Vikings", "Last King"];

// favShows.map(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
// const numArray = [21, 33, 2, 44, 10];
// let newNumArray = numArray.filter(num => num % 2 == 0)
// console.log(newNumArray)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

const arrayChomper = (arr) => {
    let sortArr = arr.sort()
    console.log(sortArr)
    console.log(sortArr[1], sortArr[sortArr.length - 2])
    let sum = sortArr[1] + sortArr[sortArr.length - 2]
    alert(sum)
}


arrayChomper([34, -2, -44, 2, 55, 3, 21, -34, -111, 32])