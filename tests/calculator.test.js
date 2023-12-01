import calculator from "../modules/calculator";

test('add function: should take 2 numbers and add them together, rounding the result to 2 decimal places', () => {
    expect(calculator.add(1, 3)).toBe(4);
});

test('subtract function: should take 2 numbers and subtract the second number from the first, rounding the result to 2 decimal places', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test('divide function: should take 2 numbers and divide the first by the second, rounding the result to 2 decimal places', () => {
    const result = calculator.divide(101.23, 15.75);
    expect(result).toBe(6.43);
});

test('multiply function: should take 2 numbers and multiply the first by the second, rounding the result to 2 decimal place', () => {
    const result = calculator.multiply(9, 100);
    expect(result).toBe(900);
});
