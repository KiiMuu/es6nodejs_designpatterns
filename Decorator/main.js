const { CourseBuilder, HotNew, BestSeller } = require('./Decorator');

const course_1 = new CourseBuilder('Nextjs').makePaid(100).makeCampain().build();

const HotNew_1 = new HotNew(course_1);
const BestSeller_1 = new BestSeller(HotNew_1);

course_1.toString(course_1);
course_1.toString(HotNew_1);
course_1.toString(BestSeller_1);
