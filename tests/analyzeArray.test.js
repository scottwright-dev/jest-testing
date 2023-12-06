// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
import analyzeArray from "../modules/analyzeArray";

test('returns an object contains average, min, max and length properties', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: expect.any(Number),
        min: expect.any(Number),
        max: expect.any(Number),
        length: expect.any(Number)
    });
});

test('calculateAverage should return the average value of all the array items', () => {
    expect(analyzeArray([6,6,5,4,56,98,3,5,9]).average).toBeCloseTo(21.33);
})

test('calculateMin should return the smallest number from a given array', () => {
    expect(analyzeArray([1,2,3]).min).toEqual(1);
})

test('calculateMax should return the largest number from a given array', () => {
    expect(analyzeArray([1,2,3]).max).toEqual(3);
})

test('calculateLength should return the total number of items in an array', () => {
    expect(analyzeArray([6,6,5,4,56,98,3,5,9]).length).toEqual(9);
})