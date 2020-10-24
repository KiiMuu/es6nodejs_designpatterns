const Person = require('./person');

class Instructor extends Person {
    constructor (type, name, position, earnings) {
        super(name); // for super class => Person

        this.type = type;
        this.position = position;
        this.earnings = earnings;
    }

    toString () {
        return JSON.stringify(this);
    }
}

module.exports = Instructor;