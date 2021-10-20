function caesarEncrypt(string, rotNum) {
  return string.split('').map(char => {
    if (char.match(/[A-Z]/)) {
      return String.fromCharCode((char.charCodeAt() - 65 + rotNum) % 26 + 65);
    } else if (char.match(/[a-z]/)) {
      return String.fromCharCode((char.charCodeAt() - 97 + rotNum) % 26 + 97);
    } else {
      return char;
    }
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
"Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
