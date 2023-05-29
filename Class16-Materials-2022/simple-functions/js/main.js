//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractNums(num1, num2) {
    alert(num1 - num2)
}
//create a function that divides three numbers and console logs the quotient
const quotientMaker = (num3, num4, num5) => {
    result = num3 / num4 / num5;
    console.log(result)
}
//create a function that multiplys three numbers and returns the product
const Multimeter = (num6, num7, num8) => {
    return (num6 * num7 * num8);

}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const Maker = (a, b, c) => {
    return (a + b) % c;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

const checkLister = (d, e, f, g) => {
    if (d * e > 100) {
        console.log(d * e + f + g)
    } else if (d * e < 100) {
        console.log(d * e - f - g)
    } else {
        alert((d * e * f) % g)
    };
}