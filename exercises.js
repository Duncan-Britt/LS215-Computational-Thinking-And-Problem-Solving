/*
each block can only be used ONCE
(word can't match two blocks - redundant)
ignore case


input: word
- unkown case
output: bool;

Data STRUCTURES:
2 dimensional array of blocks

algorithm:
set word to uppercase
itereate through word
for every character, see if it can be found among existing blocks
- if no, return false
- if so, splice the block from block array

return true

botch -> false
baby -> false

*/

function isBlockWord(word) {
  const blocks = [['B','O'],   ['X','K'],   ['D','Q'],   ['C','P'],   ['N','A'],
  ['G','T'],   ['R','E'],   ['F','S'],   ['J','W'],   ['H','U'],
  ['V','I'],   ['L','Y'],   ['Z','M'],]

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    let chr = word[i];
    let idx;
    if (blocks.some((block, i) => {
                idx = i;
                return block.includes(chr);
                })) {
      blocks.splice(idx, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH')      === true);
console.log(isBlockWord('BUTCH')      === false);
console.log(isBlockWord('jest')       === true);
