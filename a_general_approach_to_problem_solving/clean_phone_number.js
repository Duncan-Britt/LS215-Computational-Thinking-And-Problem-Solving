// Step 1 get all digits ignoring irrelevant characters
// if there are 10, return as string
// if there are less, return ten zeros
// if there are 12 or more, return ten zeros
// if there are 11, then
//     if the first digit is 1, return the remaininng 10 digits as a string
//     otherwise return 10 zeros.

function cleanPhoneNum(phoneNumber) {
  const digits = phoneNumber.match(/\d/g).join('');
  if (digits.length === 10) return digits;
  if (digits.length === 11 && digits[0] === '1') return digits.slice(1);
  return TEN_ZEROS;
}

const TEN_ZEROS = '0000000000';
const exampleNum = '3037201234';
const twelveDigits = '01010101010';
const dirtyNum = ' ../23.3/4-44(9612) -.';
const cleanedDirtyNum = '2334449612';

console.log(
  cleanPhoneNum('232') === TEN_ZEROS,
  '\n',
  cleanPhoneNum('1' + exampleNum) === exampleNum,
  '\n',
  cleanPhoneNum('2' + exampleNum) === TEN_ZEROS,
  '\n',
  cleanPhoneNum(twelveDigits) === TEN_ZEROS,
  '\n',
  cleanPhoneNum(exampleNum) === exampleNum,
  '\n',
  cleanPhoneNum(dirtyNum) === cleanedDirtyNum
);
