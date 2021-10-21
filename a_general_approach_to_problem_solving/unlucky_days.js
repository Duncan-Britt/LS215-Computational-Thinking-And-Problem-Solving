// input: year as integer
// output integer number of friday the 13ths for the given year
//
// for every moonth of the given year, we need to know the day of the week
// on the 13th day of the month
//
// and we need to know how many of those are Fridays
//
// store number of unlucky days;
//
// iterate through every month of the input year
//   = find the day of the week of the 13th day of the month
//   - if it is friday, increment unlucky days
//
// return unlucky days

function fridayThe13ths(year) {
  const FRIDAY_IDX = 5

  let date = new Date(year, 0, 13);
  let unluckyDays = 0;
  for (let i = 1; i <= 12; i++) {
    if (date.getDay() === FRIDAY_IDX) unluckyDays += 1;
    date.setMonth(i);
  }

  return unluckyDays
}

console.log(fridayThe13ths(1986)      === 1);
console.log(fridayThe13ths(2015)      === 3);
console.log(fridayThe13ths(2017)      === 2);
