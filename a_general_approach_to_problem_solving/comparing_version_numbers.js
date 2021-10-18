// compare from left to right
// only if numbers to the left are equal does the numbers to the right become relevant
//
// split version strings into array of number segments deliminated by dots
//
// map number segments to array of integer values
//
// iterate through integer values of both versions from left to right.
    // if a value is missing for the given index (because the array is shorter),
    // substitue 0 for the value
//   if the left number is not equal to the right number, return -1 or 1,
//   depending on whether it is lesser or greater
//
// If iteration completes without finding a value greater than another, return 0;

function compareVersions(version1, version2) {
  function valid(version) {
    return /^(\d*\.?)*$/.test(version);
  }

  if (!valid(version1) || !valid(version2)) return null;

  const v1Strs = version1.split('.');
  const v2Strs = version2.split('.');
  const v1Nums = v1Strs.map(str => parseInt(str, 10));
  const v2Nums = v2Strs.map(str => parseInt(str, 10));

  const len = v1Nums.length > v2Nums.length ? v1Nums.length : v2Nums.length;

  for (let i = 0; i < len; i++) {
    const v1Num = v1Nums[i] || 0;
    const v2Num = v2Nums[i] || 0;

    if (v1Num < v2Num) {
      return -1;
    } else if (v1Num > v2Num) {
      return 1;
    }
  }

  return 0;
}

console.log(compareVersions('1.18.2', '13.37')); // -1
console.log(compareVersions('13.7', '1.18.2')); // 1
console.log(compareVersions('1.18.2.0', '1.18.2')); // 0
