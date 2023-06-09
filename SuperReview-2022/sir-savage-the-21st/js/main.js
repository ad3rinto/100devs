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
