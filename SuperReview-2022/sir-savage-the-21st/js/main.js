//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
// let numberOfLoops = 0;

// function check(numberOfLoops) {
//     while (numberOfLoops < 21) {
//         console.log(21)
//         numberOfLoops++
//     }

// }
function check2() {
    for (let num = 0; num < 21; num++) {
        document.querySelector("#savageSays").innerHTML += " 21"
    }
}

const loopFinder = (a) => {
    for (let i = 1
        ; i <= a; i++) {
        if ((i % 5 == 0) && (i % 3 == 0)) {
            console.log("fizzbuzz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }

}