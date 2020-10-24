class Course {
    constructor (title, price) {
        this.title = title;
        this.price = price;
    }

    total () {
        return this.price;
    }

    print () {
        return console.log(`${this.title} - ${this.price}`);
    }
}

module.exports = Course;