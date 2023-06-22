//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
// function Skater(bladeType, colour, power, speed) {
//     this.bladeType = bladeType
//     this.colour = colour
//     this.power = power
//     this.speed = speed

//     this.sound = function () {
//         console.log("Vroooooooooooom")
//     }

//     this.jump = function () {
//         console.log("HOw high")
//     }

//     this.slide = function () {
//         console.log("How long")
//     }

// }

class Fighter {
    constructor(bladeType, colour, power, speed) {
        this.bladeType = bladeType
        this.colour = colour
        this.power = power
        this.speed = speed

        this.sound = function () {
            console.log("Vroooooooooooom")
        }

        this.jump = function () {
            console.log("HOw high")
        }

        this.slide = function () {
            console.log("How long")
        }

    }
}



let captain = new Fighter("inline", "greenish-blue", 70, 120)
let admiral = new Fighter("4-wheels", "Orange", 79, 110)

console.log(captain)
console.log(admiral)