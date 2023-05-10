// *Variables*
// Create a variable and console log the value
const agent = "Nicholas Brody";
console.log(agent)
// Create a variable, add 10 to it, and alert the value
let count = 0;
alert(count += 3)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(num1, num2, num3, num4) {
    total = num1 - num2 - num3 - num4
    alert(total)

}

// Create a function that divides one number by another and returns the remainder
const devider = (num6, num7) => {
    return num6 % num7
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbers(num8, num9) {
    if (num8 + num9 > 50) {
        alert("Jumanji")
    } else {
        alert("Boom")
    }
}




// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multByThree = (a, b, c) => {
    let muilt = a * b * c;
    if (muilt % 3 === 0) {
        alert("Ziko")
    }
}