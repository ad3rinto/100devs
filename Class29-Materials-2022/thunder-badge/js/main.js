//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class Pokemon {
    constructor(age, power, colour, speed) {
        this.age = age
        this.power = power
        this.colour = colour
        this.speed = speed
    }
    shout() {
        console.log(this.power)
    }

    run() {
        console.log("I like running")
    }
}



const pikachu = new Pokemon(7, 200, "brown", 30)