//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

//using foreach method
const myArray = [5, 34, 1000]
let sumOfArray = 0
myArray.forEach((num) =>
    sumOfArray += num)

// alert(sumOfArray)

//using array.reduce

let change = myArray.reduce((acc, num) => acc += num)
// console.log(change)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const squarer = (arr) => {
    return (arr.map((item) => item ** 2))
}



//Create a function that takes string
//Print the reverse of that string to the console

const stringer = (str) => {
    let len = str.length;
    let newStr = "";
    for (let i = len - 1; i >= 0; i--) {
        newStr += str[i]
    } return newStr
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not

const stringTaker = (str) => {
    if (str === stringer(str)) {
        console.log("string is " + str)
        console.log("revstring is " + stringer(str))
        alert("Eureka")
    } else {
        console.log("Not quite")
    }
}

stringTaker("Redivider")