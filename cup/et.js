/**
 * Evaluate to a resolved shape style given the current `environment`.
 * @param {Object} environment - The current environment configuration.
 * @returns {Object} - The resolved shape style.
 */
function resolveShapeStyle(environment) {
    // Define default styles
    const defaultStyle = {
        color: 'black',
        border: '1px solid black',
        backgroundColor: 'white'
    };

    // Resolve style based on the environment
    let resolvedStyle = { ...defaultStyle };

    if (environment.theme === 'dark') {
        resolvedStyle.color = 'white';
        resolvedStyle.backgroundColor = 'black';
    } else if (environment.theme === 'light') {
        resolvedStyle.color = 'black';
        resolvedStyle.backgroundColor = 'white';
    }

    if (environment.highContrast) {
        resolvedStyle.border = '2px solid yellow';
    }

    // Additional style resolutions can be added here based on environment properties

    return resolvedStyle;
}

// Example usage
const environment = {
    theme: 'dark',
    highContrast: true
};

const shapeStyle = resolveShapeStyle(environment);
console.log(shapeStyle);
// Output: { color: 'white', border: '2px solid yellow', backgroundColor: 'black' }
