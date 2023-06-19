//Create a mouse object that has four properties and three methods
const mouse = {
    colour: "brown",
    speed: "fast",
    eyeColour: "brown",
    age: 2,

    sound() {
        alert("squeal")
    },

    makeMusic() {
        console.log("Tra la la la la la, sing me a new song")
    },

    makeQuiet() {
        console.log("sheeeee")
    }
}

//another way to declare an object

let cat = {};

cat.sound = "meaoooow";
cat.colour = "black and white";
cat.shout = () => {
    console.log("Na you go tire")
}

cat.numberOfLimbs = 4;



//create object template

function Animal(name, colour, speed, group) {
    this.name = name
    this.colour = colour
    this.speed = speed
    this.group = group

    this.makeSomeNoise = function () {
        alert("my name is " + this.name)
    }
}

const dog = new Animal("Bingo", "white", "123", "canine")