import caesarsCipher from "../modules/caesarsCipher"

test('Handles an empty string', () => {
    expect(caesarsCipher('')).toBe('');
})

test('Ensure the end of the alphabet wraps to start with a shiftValue of 2', () => {
    expect(caesarsCipher('xyz')).toBe('zab');
});

test('Ensure case is preserved (uppercase / lowercase)', () => {
    expect(caesarsCipher('Hello There')).toBe('Jgnnq Vjgtg');
});

test('Ensure non-alphabet characters are preserved', () => {
    expect(caesarsCipher('!?,.:;"')).toBe('!?,.:;"');
});
