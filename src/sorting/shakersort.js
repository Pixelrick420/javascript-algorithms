(function (exports) {
  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * Shaker sort algorithm.<br><br>
   * Complexity: O(N^2).
   *
   * @example
   * var sort = require('path-to-algorithms/src/' +
   * 'sorting/shakersort').shakerSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/shakersort
   * @param {Array} array Input array.
   * @param {Function} cmp Optional. A function that defines an
   * alternative sort order. The function should return a negative,
   * zero, or positive value, depending on the arguments.
   * @return {Array} Sorted array.
   */
  function shakerSort(array, cmp) {
    cmp = cmp || comparator;
    var temp;
    var swapped = true;
    while (swapped){
      swapped = false;
      for (var i = 0; i < array.length - 1 ; i += 1) {
        if (cmp(array[i], array[i + 1]) > 0){
          temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped){
        break;
      }
      swapped = false;
      for (var i = array.length - 1; i > 0 ; i -= 1) {
        if (cmp(array[i], array[i - 1]) < 0){
          temp = array[i];
          array[i] = array[i - 1];
          array[i - 1] = temp;
          swapped = true;
        }
      }
      if (!swapped){
        break;
      }
    }
    return array;
  }

  exports.shakerSort = shakerSort;

})(typeof window === 'undefined' ? module.exports : window);
