//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    makeSound() {
        console.log(`I am a ${this.name}`)
    }
}


class Dog extends Animal {
    constructor(name, age, breed, colour) {
        super(name, age)
        this.breed = breed
        this.colour = colour
    }
    makeSound() {
        // super.makeSound()
        console.log('na me oo')
    }
}

