class CourseGroup {
    constructor (title, composite = []) {
        this.title = title;
        this.composite = composite;
    }

    total () {
        return this.composite.reduce((result, nextItem) => {
            result + nextItem.total();
        }, 0);
    }

    print () {
        console.log(`************** ${this.title} ****************`);
        this.composite.forEach(element => element.print());
        console.log(`******************************`);
    }
}

module.exports = CourseGroup;