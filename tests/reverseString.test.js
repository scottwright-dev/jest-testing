import reverseString from "../modules/reverseString";

test('Expect reverseString function to be defined', () => {
    expect(reverseString).toBeDefined();
});

test('Expect a string', () => {
    const result = reverseString('hello')
    expect(typeof result).toBe('string');
});

test('Expect string to be reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Expect multiple words to be reversed', () => {
    expect(reverseString('separate words in a string')).toBe('gnirts a ni sdrow etarapes');
});
