// input: word
// output: bool
//
// word cannot contain both letters from any given block.

// for every block, return false if word contains both letters
// return true

const BLOCKS = [
  [ 'B', 'O' ], [ 'X', 'K' ],
  [ 'D', 'Q' ], [ 'C', 'P' ],
  [ 'N', 'A' ], [ 'G', 'T' ],
  [ 'R', 'E' ], [ 'F', 'S' ],
  [ 'J', 'W' ], [ 'H', 'U' ],
  [ 'V', 'I' ], [ 'L', 'Y' ],
  [ 'Z', 'M' ]
]

function isBlockWord(word) {
  word = word.toUpperCase();

  for (let i = 0; i < BLOCKS.length; i++) {
    const block = BLOCKS[i];
    if (word.includes(block[0]) && word.includes(block[1])) return false;
    if (char = (word.includes(block[0]) && block[0]) || (word.includes(block[1])) && block[1]) {
      if (!(word.indexOf(char) === word.lastIndexOf(char))) return false;
    }
  }
  return true;
}
console.log(
isBlockWord('BATCH')      === true,
'\n',
isBlockWord('BUTCH')      === false,
'\n',
isBlockWord('jest')       === true,
'\n',
isBlockWord('BATCH')     === true,
'\n',
isBlockWord('BUTCH')     === false,
'\n',
isBlockWord('jest')      === true,
'\n',
isBlockWord('floW')      === true,
'\n',
isBlockWord('APPLE')     === false,
'\n',
isBlockWord('apple')     === false,
'\n',
isBlockWord('apPLE')     === false,
'\n',
isBlockWord('Box')       === false,
);
