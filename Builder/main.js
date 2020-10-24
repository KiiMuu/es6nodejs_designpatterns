const CourseBuilder = require('./CourseBuilder');

const course_1 = new CourseBuilder('Design Pattern').makePaid(100).makeCampain().build();
const course_2 = new CourseBuilder('OOD').build();

course_1.toString();
course_2.toString();