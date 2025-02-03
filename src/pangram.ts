/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const str = word.toString().toLowerCase();
  const isNumber = !isNaN(Number(word));
  const uniqueChars = new Set(str.replace(/[^a-z0-9]/g, ''));

  if (isNumber) {
    return uniqueChars.size === 10;
  }
  return uniqueChars.size === 26;
};
