//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

function EspressoMachine(colour, brand, capacity, powerRating) {
    this.colour = colour
    this.brand = brand
    this.capacity = capacity
    this.powerRating = powerRating

    this.makeTea = function () {
        console.log("Making tea.....")
    }

    this.makeCoffee = function () {
        console.log("Making coffee.....")
    }
    this.makeHotChocolate = function () {
        console.log("Making hot chocolate.....")
    }
}





const myMaker = new EspressoMachine("white", "sony", "200L", 45)