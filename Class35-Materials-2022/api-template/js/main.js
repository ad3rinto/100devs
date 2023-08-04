//Make an api request using async await

// function houseOne() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Paper delivered to house one")
//         }, 1000)
//     })
// }


// function houseTwo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Paper delivered to house two")
//         }, 5000)
//     })
// }

// function houseThree() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Paper delivered to house three")
//         }, 2000)
//     })
// }




// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo).then(data => console.log(data))
//     .then(houseThree).then(data => console.log(data))
//     .catch(err => console.log(err))

// async function getPaid() {
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)

// }


// getPaid()

async function getDogPhoto() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        console.log(data.message)

    }
    catch (err) {
        console.log(err)
    }

}

getDogPhoto()
