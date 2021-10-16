function isAnagram(word, otherWord) {
  const uniqueChars = {};
  for (let i = 0; i < word.length; i++) {
    uniqueChars[word[i]] = uniqueChars[word[i]] || 0;
    uniqueChars[word[i]] += 1;
  }
  for (let i = 0; i < otherWord.length; i++) {
    if (!uniqueChars[otherWord[i]]) return false;

    uniqueChars[otherWord[i]] -= 1;
  }

  return Object.values(uniqueChars).every(charCount => charCount === 0);
}

function anagram(word, list) {
  return list.filter(testWord => isAnagram(word, testWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
