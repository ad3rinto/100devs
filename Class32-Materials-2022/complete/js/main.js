// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }
// }
// class Cat extends Animal{
//     constructor(name, breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }
// }









// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')

// let farm = [simba,machi,salem]

// for( a of farm ){
//     a.speak()
// }


class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role

    }
    get name() {
        return this._name

    }
    get role() {
        return this._role

    }

}



class Frontend extends Contractor {
    constructor(name, role, frontendstack) {
        super(name, role)
        this._frontendstack = frontendstack
    }
    get stack() {
        return this._frontendstack
    }
}

class Backend extends Contractor {
    constructor(name, role, backendstack) {
        super(name, role)
        this._backendstack = backendstack
    }
    get stack() {
        return this._backendstack
    }

}



const adam = new Backend("Adam", "Snr Dev", "MERN")
const kally = new Frontend("Kally", "Junior Dev", "MERN")