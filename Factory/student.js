const Person = require('./person');

class Student extends Person {
    constructor (type, name, level) {
        super(name); // for super class => Person

        this.type = type;
        this.level = level;
    }

    toString () {
        return JSON.stringify(this);
    }
}

module.exports = Student;