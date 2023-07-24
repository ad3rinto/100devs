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
    makeSomeNoise() {
        console.log(`My name is ${this._name} and I belong to the ${this._role} team`)
    }
}

class Front extends Contractor {
    constructor(name, role, tech_stack) {
        super(name, role)
        this._tech_stack = tech_stack

    }
    get tech_stack() {
        return this._tech_stack
    }

    shout() {
        super.makeSomeNoise()
        console.log(this._tech_stack)
    }

}


const dave = new Front("Dave", "Front-end", "MERN")