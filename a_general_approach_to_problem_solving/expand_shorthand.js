/*
Range limits are inclusive

Input: short hand text
- only digits which are necessary to determine next number are given, (given the
  knowledge that the next number is greater than the last).

Output: array: set of all numbers in the ranges

Challenge: Given number n, and digits, find the number that the digits represent
  - find the number which ends with the digits

ALGORITHM:
- split shorthandText into array of numbers/ranges
- map array of numbers/ranges as strings to 2 dimensional array of NUMBERS
- create result Array
- for every number between index one and index last of each range, append n
  to result arrray
- return result arrray

*/

function expandShorthand(shorthandText) {
  let prev;
  const ranges = shorthandText.split(',').map((shorthandNote, i) => {
    return shorthandNote.match(/\d+/g).map((digits, j) => {
      if (i === 0 && j === 0) {
        prev = Number(digits);
        return Number(digits);
      }

      n = expandNumber(prev, digits);
      prev = n;
      return n;
    });
  });

  const set = [];

  ranges.forEach(range => {
    for (let n = range[0]; n <=range[range.length - 1]; n++) {
      set.push(n);
    }
  });


  return set;
}

function expandNumber(prev, lastDigits) {
  let n = prev + 1;
  while (!isNextNum(n, lastDigits)) {
    n += 1;
  }
  return n;
}

function isNextNum(n, lastDigits) {
  n = String(n);
  if (!endsWith(n, lastDigits)) return false;

  if (fewerDigitsWouldSuffice(n, lastDigits) &&
      !aLesserNumberWouldDo(n, lastDigits)) {
    return false;
  }

  return true;
}

function fewerDigitsWouldSuffice(n, digits) {
  return endsWith(n, digits.slice(1));
}

function aLesserNumberWouldDo(n, digits) {
  n = n.slice(1);
  return endsWith(n, digits);
}

function endsWith(n, digits) {
  if (digits.length === 0) return false;

  let ndx = n.length - 1;
  let d = digits.length - 1;
  for (; d >= 0; d -= 1) {
    if (n[ndx] !== digits[d]) return false;
    ndx -= 1;
  }

  return true;
}

console.log(
  expandShorthand("1, 3, 7, 2, 4, 1"), //--> 1, 3, 7, 12, 14, 21
  '\n',
  expandShorthand("1-3, 1-2"), //--> 1, 2, 3, 11, 12
  '\n',
  expandShorthand("1:5:2"), //--> 1, 2, 3, 4, 5, 6, ... 12
  '\n',
  expandShorthand("104-2"), //--> 104, 105, ... 112
  '\n',
  expandShorthand("104-02"), //--> 104, 105, ... 202
  '\n',
  expandShorthand("545, 64:11"), //--> 545, 564, 565, .. 611
);

/*

let i = prev + 1;
if i is next num
  - return i;
Else
  - increment i;

*/

console.log(
  expandNumber(104, '02') === 202,
  '\n',
  expandNumber(104, '102') === 1102,
  '\n',
  expandNumber(7, '3') === 13,
  '\n',
  expandNumber(7, '13') === 113,
  '\n',
  expandNumber(7, '9') === 9,
  '\n'
);

/*

does n end with last digits?
no ? return false;

yes? does n end with last digits.slice(1) ?
        yes ? return false
        no ? return true;


*/

console.log(
  isNextNum(202, '3') === false,
  '\n',
  isNextNum(202, '02') === true,
  '\n',
  isNextNum(113, '13') === true,
  '\n',
  isNextNum(13, '3') === true,
  '\n',
  isNextNum(13, '13') === false,
  '\n',
  isNextNum(0, '7') === false,
  '\n',
  isNextNum(2043, '043') === true
);

/*
- convert n to string
- compare each digit of n to digits from the end until digits runds out
return false if not equal at any point


*/

console.log(
  endsWith('13', '13') === true,
  '\n',
  endsWith('3', '13') === false,
  '\n',
  endsWith('13', '3') == true,
  '\n',
  endsWith('202', '02') === true,
  '\n',
  endsWith('2', '02') === false,
  '\n',
  endsWith('2002', '02') === true,
  '\n',
  endsWith('202', '202') === true,
  '\n',
  endsWith('202', '2202') === false,
  '\n',
  endsWith('1', '') === false,
  '\n'
);
