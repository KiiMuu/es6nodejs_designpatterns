const userFactory = require('./userFactory');

const karim = userFactory('instructor', 'Karim', 'Software Engineer', 100);
const jhon = userFactory('student', 'Jhon', 'Beginner');

console.log(karim.toString());
console.log(jhon.toString());