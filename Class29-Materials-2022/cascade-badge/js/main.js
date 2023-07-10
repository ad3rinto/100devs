//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty.
// Please create a function that reverses your list and prints it to the console.

function listReverser(list) {
    let reverserList = list.reverse()
    return reverserList
}
//Given two integer arrays a, b, both of length >= 1,
// create a program that returns true if the sum of the squares of each element
// in a is strictly greater than the sum of the cubes of each element in b.

function test(a, b) {
    if (a.length > 1 && b.length > 1) {
        let sumA = a.reduce((acc, item) => acc += item ** 2)
        let sumB = b.reduce((acc, item) => acc += item ** 2)
        if (sumA > sumB) {
            return true
        } else {
            return false
        }

    } else {
        console.log("Arrays not long enough")
    }

}


let may = [2, 3, 4]
let yam = [1, 2, 3]

// console.log(test(yam, may))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]


const wasabi = [22, -6, 32, 82, 9, 25].filter((arr, i) => arr % i == 0)
console.log(wasabi)


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.