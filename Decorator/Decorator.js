/* Decorator Pattern => Structural Pattern */

// Not new, but decorated

// * Modify an object dynamically
// * Uses composition instead of inheritance
// * More flexibility than static inheritance

// Inheritance vs. Composition
// The main difference between inheritance and composition is in the relationship between objects.

// * Inheritance is an `is-a` relationship (E.g. The car is a vehicle). Composition is a `has-a` relationship (E.g. The car has a steering wheel).
// * Inheritance is known as the tightest form of coupling in object-oriented programming. Changing a base class can cause unwanted side effects on its subclasses or even all over the codebase.
// * Composition is a far looser coupling. Combining with Dependency Injection, it brings more flexibility and also allows us to change runtime behavior.
// * Inheritance: To design a class on what it is.
// * Composition: To design a class on what it does.

const Course = require('./course');

class CourseBuilder {
    constructor (name, sales = 0, price = 0) {
        this.name = name;
        this.sales = sales;
        this.price = price;
    }

    makePaid (price) {
        this.isFree = false;
        this.price = price;

        return this;
    }

    makeCampain () {
        this.isCampain = true;

        return this;
    }

    build () {
        return new Course(this);
    }
}

class HotNew {
    constructor (baseCourse) {
        this.name = baseCourse.name + ' is New';
    }
}

class BestSeller {
    constructor (baseCourse) {
        this.name = baseCourse.name + ' is Bestseller';
    }
}

module.exports = { CourseBuilder, HotNew, BestSeller };