function wordToDigit(string) {
  string = string.replace(/\bzero\b/g, '0');
  string = string.replace(/\bone\b/g, '1');
  string = string.replace(/\btwo\b/g, '2');
  string = string.replace(/\bthree\b/g, '3');
  string = string.replace(/\bfour\b/g, '4');
  string = string.replace(/\bfive\b/g, '5');
  string = string.replace(/\bsix\b/g, '6');
  string = string.replace(/\bseven\b/g, '7');
  string = string.replace(/\beight\b/g, '8');
  string = string.replace(/\bnine\b/g, '9');

  return string;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
