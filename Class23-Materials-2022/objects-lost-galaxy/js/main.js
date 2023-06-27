//Create a dog object that has four properties and three methods
const dog = {
    age: 7,
    colour: "white",
    breed: "alsatian",
    temperament: "mild",

    sound: function () {
        console.log("bark bark")
    },

    bark: function () {
        alert("WOOF WOOF")
    },

    breath: function () {
        alert("heehee heehee heehee")
    }
}

dog.talk = "Wahala";

function Dog(age, breed, colour, temperament) {
    this.age = age
    this.breed = breed
    this.colour = colour
    this.temperament = temperament

    this.bark = function () {
        alert("Woof " + this.breed)
    }
}


const lulu = new Dog(3, "cavapoo", "golden brown", "gentle")


// console.log(lulu)


//Create a pizza object that has four properties and three methods

const pizza = {};
pizza.shape = "circle";
pizza.temp = "hot";
pizza.crust = "thin";
pizza.order = function () {
    console.log("......Place order")
}
pizza.cancel = function () {
    console.log("..........Cancelling order")
}

pizza.eat = function () {
    console.log("Yayyyyyyyy")
}

class Pizza {
    constructor(size, shape, flavoring, topping) {
        this.size = size
        this.shape = shape
        this.flavoring = flavoring
        this.topping = topping
    }
}


let ricePizza = new Pizza("large", "circle", ["corn", "chicken"], "spicy")
let suyaPizza = new Pizza("Medium", "square", ["beef-suya", "onions"], "dodo")


console.log(ricePizza)
console.log(suyaPizza)