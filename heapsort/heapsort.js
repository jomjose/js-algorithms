(function (exports) {

  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * The heapsort algorithm. It's complexity is O(nlog n).
   *
   * @public
   */
  var heapSort = (function () {

    /**
     * Finds the correct place of given element in given max heap.
     *
     * @private
     * @param {array} array Array
     * @param {number} index Index of the element which palce in
     *                       the max heap should be found.
     */
    function heapify(array, index, heapSize, cmp) {
      var left = 2 * index + 1,
          right = 2 * index + 2,
          largest = index;

      if (left < heapSize && cmp(array[left], array[index]) > 0) {
        largest = left;
      }

      if (right < heapSize && cmp(array[right], array[largest]) > 0) {
        largest = right;
      }

      if (largest !== index) {
        var temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;
        heapify(array, largest, heapSize, cmp);
      }
    }
