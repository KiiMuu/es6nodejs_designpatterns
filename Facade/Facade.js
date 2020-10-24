/* Facade Pattern => Structural Pattern */

// * Provides convenient higher-level interface
// * Hide complex code (logic)
// * Facade => Wrapper
// * Readable code

const FacadeOrWrapper = (() => {
    const methodeOne = parameterOne => {
        // Difficult Logic
    }

    const methodeTwo = parameterTwo => {
        // Difficult Logic
    }

    return {
        MethodeOne: methodeOne,
        MethodeTwo: methodeTwo
    }
})();

// Get access through the wrapper(Facade)
FacadeOrWrapper.MethodeOne(parameterOne);