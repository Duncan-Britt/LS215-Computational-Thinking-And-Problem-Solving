function formatPercent(decimal) {
  return (decimal * 100).toFixed(2);
}

function letterPercentages(str) {
  const upperLetters = str.match(/[A-Z]/g) || [];
  const lowerLetters = str.match(/[a-z]/g) || [];
  const nTotal = str.length;
  const nUpper = upperLetters.length;
  const nLower = lowerLetters.length;
  const nNeither = nTotal - (nUpper + nLower);

  const [ percentUpper, percentLower, percentNeither ] = [
    nUpper, nLower, nNeither].map(n => formatPercent(n / nTotal));

  return {
    lowercase: percentLower,
    uppercase: percentUpper,
    neither: percentNeither,
  }
}

console.log(
letterPercentages('abCdef 123'),
'\n',
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef'),
'\n',
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123'),
'\n'
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
);
