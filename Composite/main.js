const Course = require('./course');
const CourseGroup = require('./CourseGroup');

const js_course = new Course('JavaScript', 11.99);
const react_course = new Course('Reactjs', 19.99);

const ps_course = new Course('Photoshop', 5.99);
const sketch_course = new Course('Sketch', 9.99);

const design_courses = new CourseGroup('Design Courses', [ps_course, sketch_course]);
const web_courses = new CourseGroup('Web Courses', [js_course, react_course]);

const main_node = new CourseGroup('Main Node', [design_courses, web_courses]);

js_course.print();
console.log(js_course.total());

design_courses.print();
console.log('$' + design_courses.total());

web_courses.print();
console.log('$' + web_courses.total());

main_node.print();
console.log('$' + main_node.total());