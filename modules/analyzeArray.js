// helper functions
const calculateAverage = array => array.reduce((a,b) => a + b, 0) / array.length;
const calculateMin = array => Math.min(...array);
const calculateMax = array => Math.max(...array);
const calculateLength = array => array.length;

// main function
function analyzeArray(array) {
    let arrayObject = {
        average: calculateAverage(array), 
        min: calculateMin(array), 
        max: calculateMax(array), 
        length: calculateLength(array)};

    return arrayObject;
}

export default analyzeArray; 
