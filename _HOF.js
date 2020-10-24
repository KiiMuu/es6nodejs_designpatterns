// Higher Order Functions(HOF) => 
// Functions that take a funcation as a parameter (forEach, filter, map...)

const courses = ['Gatsby', 'Nextjs', 'Trello', 'Gitbucket'];

courses.forEach((item, i) => console.log(item, i));

let courseName = courses.filter(item => item !== 'Trello');
console.log(courseName);

let courseLength = courses.map(item => item.length);
console.log(courseLength);

let reduceCourses = courses.reduce((sum, item) => sum + ', ' + item);
console.log(reduceCourses);