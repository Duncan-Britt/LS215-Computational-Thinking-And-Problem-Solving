// first row has 1 diamond
// second has 3 diamonds
// third has 5 diamonds
//
// up to the point at which the n diamonds = the input n, the nth row contains nth * 2 - 1 diamonds
//
// after the point at which the n diamonds = the input n, its different
//
// Input n represents:
//   1. number of rows
//   2. width of all rows, including white space
//
// whitespace for a given row is width - nstars
// whitespace for each side of a row is (width - nstars) / 2
//
// counter = -n + 1
// nStars = n - abs(counter)
//
// counter += 2
//
// append whitespace
// append nstars
// append whitespace
// log str
// increment counter
// repeat until counter > n

function diamond(n) {
  const width = n;

  for (let counter = -n + 1; counter < n; counter += 2) {
    const nStars = n - Math.abs(counter);
    const nSideSpaces = (width - nStars) / 2;
    let str = '';
    str += ' '.repeat(nSideSpaces);
    // str += '*'.repeat(nStars);
    str += '*';
    if (nStars >= 3) {
      str += ' '.repeat(nStars - 2);
      str += '*';
    }
    console.log(str);
  }
}

diamond(5);
