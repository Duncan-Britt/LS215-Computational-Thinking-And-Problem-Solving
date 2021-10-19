// Input: number as string
// Output: boolean
//
// non numeric characters can be ignored

// Algorithm:
// turn number string into array of numbers, ignoring non number characters
//   regex match with number string characters
//   map characters to their number equivalent
// Counting from the rightmost digit and moving left, double the value of every second digit (array transformation)
//   For any digit that thus become 10 or more, subtract 9 from the result
//     1111 becomes 2121
//     8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together (reduce array to a sum of digits)
//   1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//   8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

//

// Input: number string
// output: original number string concatenated with 1 digit if not already valid
//
//   iterate through digits 0 to 9
//   append digit to string
//   check if string is valid
//   when the string is valid, return it.

  // get checksum of numstring with padded 0
  // get difference between nearest 10
  // replace padded 0 with difference
  // return string

function makeLuhn(numberStr) {
  const checkSum = checksum(numberStr + '0');
  let difference = 10 - checkSum % 10;
  return numberStr + String(difference);
}

function checksum(numberStr) {
  const digitsReversed = numberStr.match(/\d/g).map(Number).reverse();
  const transformedDigits = digitsReversed.map((n, i) => {
    if (i % 2 === 0) {
      return n;
    } else if ((n *= 2) >= 10) {
      n -= 9
    }
    return n;
  });

  return transformedDigits.reduce((acc, n) => acc + n);
}



console.log(
  makeLuhn('2323 2005 7766 355') === '2323 2005 7766 3554',
  '\n',
  luhn(makeLuhn('2323 2005 7766 3554'))
);

function luhn(numberStr) {
  return checksum(numberStr) % 10 === 0;
}

const VALID_NUMBER = "2323 2005 7766 3554";

console.log(
  luhn(VALID_NUMBER) === true,
  '\n',
  luhn(' ' + VALID_NUMBER + '.+-_$#' + '8 7+6=3') === true,
  '\n',
  luhn('1111') === false
);
