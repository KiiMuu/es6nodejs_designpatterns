/* Factory Pattern => Creational Pattern */

// Good practice, because the factory allows:
// * Separate the object creation from its implementation
// * Create a different instances based on a condition
// * Not expose the constructors of the objects, preventing their modifications

// Hint: All constructors are hidden in classes

const Instructor = require('./instructor');
const Student = require('./student');

const userFactory = (type, name, position, earnings = 0, level = 'Beginner') => {
    if (type === 'instructor') {
        return new Instructor(type, name, position, earnings);
    }

    if (type === 'student') {
        return new Student(type, name, level);
    }
}

module.exports = userFactory;