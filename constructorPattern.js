// Old Syntax
var OldCourse = function (title, author) {
    this.title = title;
    this.author = author;

    this.toString = function () {
        return this.title + ' - ' + this.author;
    }
}

var course_1 = new OldCourse('Oliver Twist', 'Charles Dickens');
console.log(course_1.toString());

// ES6 Syntax
class ModernCourse {
    constructor (title, author) {
        this.title = title;
        this.author = author;
    }

    toString () {
        return console.log(this.title + ' - ' + this.author);
    }
}

// Good Practice: use `const` for Objects
const course_2 = new ModernCourse('Journey to the Centre of the Earth', 'Jules Verne');
course_2.toString();
