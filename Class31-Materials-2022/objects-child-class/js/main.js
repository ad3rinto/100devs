//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
        let image = "my picture"

    }
    makeSound() {
        console.log(`I am a ${this.age} years old this year`)
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

class Cat extends Animal {
    constructor(name, age, temperament, domesticated) {
        super(name, age)
        this.temperament = temperament
        this.domesticated = domesticated
    }
    shout() {
        super.makeSound()
        console.log("AHA")
    }
}