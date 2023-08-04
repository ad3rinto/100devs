//Make an api request using async await

function houseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paper delivered to house one")
        }, 1000)
    })
}


function houseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paper delivered to house two")
        }, 5000)
    })
}

function houseThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paper delivered to house three")
        }, 2000)
    })
}




houseOne()
    .then(data => console.log(data))
    .then(houseTwo).then(data => console.log(data)).then(houseThree).then(data => console.log(data)).catch(err => console.log(err))
