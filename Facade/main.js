const { Course, CourseServicesFacade } = require('./course');

const myCourse = new Course({
    name: 'JavaScript DP',
    project: 'Self-App'
});

console.log(myCourse);

CourseServicesFacade.completeMethode(myCourse);

console.log(myCourse);