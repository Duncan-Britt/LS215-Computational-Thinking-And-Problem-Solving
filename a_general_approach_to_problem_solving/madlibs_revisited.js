/*
  Input: text template (i choose the input structure, but not type?)
  Output: mad libs sentence with template words replaced

  adjectives: quick lazy sleepy noisy hungry
  nouns: fox dog head leg tail cat
  verbs: jumps lifts bites licks pats
  adverbs: easily lazily noisily excitedly

  The **adjective **noun **verb over the **adjective **noun =>

  replace **descriptor with a random one of the words from the appropriate list

  DATA STRUCTURES: OBJECT for built in words, and input STRING

  ALGORITHM: Replace template words with built in words using replacer function
  get template words with regex matching

    WITHIN replacer:
      replace with appropriate word from object
*/

function madlibs(template) {
  const samples = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  }
  function replacer(wordType) {
    wordType = wordType.slice(1, wordType.length - 1);
    const words = samples[wordType];

    let index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  return template.replace(/<[a-z]+>/g, replacer);
}

const template1 = 'The <adjective> brown <noun> <adverb> <verb> the <adjective> yellow <noun>, who <adverb> <verb> his <noun> and looks around.'

console.log(madlibs(template1));


// const replacements = ['F', 'E', 'G', 'N'];
// function replacer(word) {
//   let index = Math.floor(Math.random() * replacements.length);
//   return replacements[index];
// }
// let str = 'a b a b c a d';
// str = str.replace(/a/g, replacer);
// console.log(str);
