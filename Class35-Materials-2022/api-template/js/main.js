//Make an api request using async await
const houseOne = () => {
    console.log("Paper delivered to house one ")
}

const houseTwo = () => {
    setTimeout(() => console.log("Paper delivered to house Two "), 3000)
}

const houseThree = () => {
    console.log("Paper delivered to house Three ")
}




houseOne()
houseTwo()
houseThree()