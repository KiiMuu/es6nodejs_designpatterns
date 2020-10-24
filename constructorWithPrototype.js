// Better
var OldCourse = function (title, author) {
    this.title = title;
    this.author = author;
}

OldCourse.prototype.toString = function () {
    console.log(this.title + ' - ' + this.author);
}

var course_1 = new OldCourse('Oliver Twist', 'Charles Dickens');
course_1.toString();