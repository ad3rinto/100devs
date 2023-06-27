//Create a constructor with 4 properties and 3 methods

class Fighter {
    constructor(power, speed, name, specialMove) {
        this.power = power
        this.speed = speed
        this.name = name
        this.specialMove = specialMove
    }
    shout() {
        console.log("Ahuuaaaaaaaa")
    }

    jump() {
        console.log("How high")
    }

    kill() {
        console.log(`Killed with my ${this.specialMove}`)
    }
}
