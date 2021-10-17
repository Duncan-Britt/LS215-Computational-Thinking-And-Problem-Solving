function isBalanced(string) {
  let nOpenParens = 0;
  let nCloseParens = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') nOpenParens++;
    if (string[i] === ')') nCloseParens++;
    if (nOpenParens < nCloseParens) return false;
  }
  return nOpenParens === nCloseParens;
}

console.log(isBalanced('What (is) this?')        === true);
console.log(isBalanced('What is) this?')         === false);
console.log(isBalanced('What (is this?')         === false);
console.log(isBalanced('((What) (is this))?')    === true);
console.log(isBalanced('((What)) (is this))?')   === false);
console.log(isBalanced('Hey!')                   === true);
console.log(isBalanced(')Hey!(')                 === false);
console.log(isBalanced('What ((is))) up(')       === false);
