//Create a constructor with 4 properties and 3 methods

class Fighter {
    constructor(power, speed, name, specialMove) {
        this.power = power
        this.speed = speed
        this.name = name
        this.specialMove = specialMove

        this.shout = function () {
            console.log("Ahuuaaaaaaaa")
        }

        this.jump = function () {
            console.log("How high")
        }

        this.kill = function () {
            console.log(`Killed with my ${this.specialMove}`)
        }
    }
}