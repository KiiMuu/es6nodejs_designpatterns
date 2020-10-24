/* Singleton Pattern => Creational Pattern */

// Good practice, because the singleton allows:
// * Restricts instantiation of a class to a single object
// * Keep the same instance of that object
// * Implementation based on the condition => `only on instance`

const Singleton = (() => {
    let course;

    const assignCourse = () => {
        const course = new Object('Perl');

        return course;
    }

    return {
        getInstance: () => {
            if (!course) {
                course = assignCourse;
            }

            return course;
        }
    }
})();

const buyFirstTime = Singleton.getInstance();
const buySecondTime = Singleton.getInstance();

if (buyFirstTime === buySecondTime) {
    console.log('Go To Course');
}