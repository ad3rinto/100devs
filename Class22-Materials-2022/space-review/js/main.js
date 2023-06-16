//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numList = [1, 3, 5, 7, 9];
// let sumList = numList.reduce((acc, c) => acc + c)
// console.log(sumList)
// let sum = 0;
// numList.forEach(x => sum += x)
// console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
// function arrayMuncher(arr) {
//     return arr.map(x => x * 2)
// };
// let check = arrayMuncher(numList)
// console.log(check)

//Create a function that takes string
//Print the reverse of that string to the console

const stringulate = (str) => {
    let len = str.length;
    let newWord = "";
    for (let i = len - 1; i >= 0; i--) {
        newWord += (str[i])
    }
    return newWord
}



//Create a function that takes in a string
//Alert if the string is a palindrome or not

function paliChecker(str) {
    let reverseString = stringulate(str);
    if (str == reverseString) {
        alert("Eureka")
    } else {
        console.log("idan")
    }
}


paliChecker("redivider")