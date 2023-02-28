/* freeCodeCamp - JavaScript Algorithms and Data Structures - Projects - III */


/* 3. Projects - Caesar Cipher */
/* 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. (https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/)

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
/* Solution */

function rot13(str) {
  const key = 13;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var cipher = ''
  for (let i=0; i < alphabet.length; i++) {
    cipher += alphabet[Math.abs((i+key)%26)];
  }
  const ciphered = cipher;
  var newStr = '';
  for (let i=0; i < str.length; i++) {
    if (ciphered.indexOf(str[i]) >= 0) {
      let index = ciphered.indexOf(str[i])
      newStr += ciphered[Math.abs((index+key)%26)];
    }
    else {
      newStr += str[i];
      }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");


