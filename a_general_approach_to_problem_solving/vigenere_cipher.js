const UPPERCASE_ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]
const LOWERCASE_ALPHABET = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]

function shiftValuesFrom(keyword) {
  return keyword.split('').map(letter => {
    if (letter.match(/[A-Z]/)) {
      return UPPERCASE_ALPHABET.indexOf(letter);
    } else {
      return LOWERCASE_ALPHABET.indexOf(letter);
    }
  })
}

function vigenereEncrypt (string, keyword) {
  const shiftValues = shiftValuesFrom(keyword);
  const chrs = string.split('');
  let shiftIdx = 0;
  let shiftLen = shiftValues.length;
  return chrs.map(chr => {
    let aCharCode;

    if (chr.match(/[^a-z]/i)) {
      return chr;
    } else if (chr.match(/[A-Z]/)) {
      aCharCode = 65;
    } else {
      aCharCode = 97;
    }

    let chrCode = chr.charCodeAt();
    let shift = shiftValues[shiftIdx];
    shiftIdx = (shiftIdx + 1) % shiftLen;
    
    let newChrCode = (chrCode - aCharCode + shift) % 26 + aCharCode;
    return String.fromCharCode(newChrCode);
  }).join('');
}

let plaintext = "Pineapples don't go on pizzas!";
let keyword = 'meat';

console.log(
  vigenereEncrypt(plaintext, keyword) // Bmnxmtpeqw dhz'x gh ar pbldal!
);

// console.log(shiftValuesFrom('abc')); // [0,1,2]
// console.log(shiftValuesFrom('xyz')); // [23,24,25]
