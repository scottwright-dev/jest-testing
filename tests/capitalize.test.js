import capitalize from '../modules/capitalize';

test('Expect capitalize function to be defined', () => {
    expect(capitalize).toBeDefined();
});

test('Expect capitalize function to return a string', () => {
    const result = capitalize('hello');
    expect(typeof result).toBe('string');
});

test('Expect first character to be capitalized', () => {
    const result = capitalize('Hello');
    expect(result.charAt(0)).toBe(result.charAt(0).toUpperCase());
});

test('Expect remaining letters of string to be returned as lowercase', () => {
    const input = 'HELLO';
    const result = capitalize(input);
    expect(result.slice(1)).toBe(input.slice(1).toLowerCase());
});
