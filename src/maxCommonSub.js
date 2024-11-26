/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxLen = 0;
  let maxSubstr = '';
  let newArray = [];

  for (let i = 0; i <= str1.length; i++) {
    newArray.push(new Array(str2.length).fill(0));
  }

  for (let i = 1; i <= newArray.length; i++) {
    for (let j = 1; j <= newArray[0].length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        newArray[i][j] = newArray[i - 1][j - 1] + 1;
        if (newArray[i][j] > maxLen) {
          maxLen = newArray[i][j];
          maxSubstr = str1.slice(i - maxLen, i);
        }
      }
    }
  }

  return maxSubstr;
};
