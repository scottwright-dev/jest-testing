function caesarsCipher(string, shiftValue = 2) {
    let decipheredString = '';
    
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);

        // Check if the character is lowercase
        if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
            charCode = ((charCode - 'a'.charCodeAt(0) + shiftValue + 26) % 26) + 'a'.charCodeAt(0);
            decipheredString += String.fromCharCode(charCode);
        } 
        // Check and handle if the character is an uppercase letter
        else if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
            charCode = ((charCode - 'A'.charCodeAt(0) + shiftValue + 26) % 26) + 'A'.charCodeAt(0);
            decipheredString += String.fromCharCode(charCode);
        } 
        // If the character is not alphabetic, keep as is
        else {
            decipheredString += string[i];
        }
    }
    return decipheredString;
}

export default caesarsCipher;
