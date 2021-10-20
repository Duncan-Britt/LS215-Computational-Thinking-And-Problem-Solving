/*
Log the first row:
- start with a star
- followed by (n - 3) / 2 spaces
- one more star
- followed by (n - 3) / 2 spaces
- last star
Log the next row:
- start with one space
- star
-  one fewer inbetween spaces than previous row
- star
- spaces
- last star
Log next row:
- one more leeding space than previously
- star
- one fewer inbetween space than previously
- star
- spaces
- last star

When inbetween spaces gets to less than 0, low middle row
set inbetween spaces to 0;
make sure leading space is same as before middle row

Log next row:
- leading spaces
- star
- in between spaces(0)
- star
- inbetween
- star

next row:
- one fewer leading spaces
- star
- one more inbetween space than previous
- star
- spaces
- star

stop when leading spaces is less than 0;



*/
function printLine(leadSpace, betweenSpace) {
  let str = '';
  str += ' '.repeat(leadSpace);
  str += '*';
  str += ' '.repeat(betweenSpace);
  str += '*';
  str += ' '.repeat(betweenSpace);
  str += '*';
  console.log(str);
}

function star(n) {
  let betweenSpace = (n - 3)/ 2
  let leadSpace = 0;
  while (betweenSpace >= 0) {
    printLine(leadSpace, betweenSpace);
    betweenSpace -= 1;
    leadSpace += 1;
  }
  console.log('*'.repeat(n));
  betweenSpace = 0;
  leadSpace -= 1;
  while (leadSpace >= 0) {
    printLine(leadSpace, betweenSpace);
    betweenSpace += 1;
    leadSpace -= 1;
  }
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
