/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
odule.exports.sort = function sort(TestUtils) {
  function func(...Anatoli) {
    return Anatoli.sort(TestUtils.sortComparator);
  }
  return func;
};
