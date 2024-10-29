/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  function convertToNumber(value) {
    if (typeof value === 'string') {
      return Number(value.replace(/\s/g, ''));
    }
    return Number(value);
  }

  const firstNum = convertToNumber(firstNumber);
  const secondNum = convertToNumber(secondNumber);

  return firstNum + secondNum;
};
