import baseSortedIndexBy from './baseSortedIndexBy.js'
import isSymbol from '../isSymbol.js'

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1

/**
 * The base implementation of `sortedIndex` and `sortedLastIndex` which
 * performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function baseSortedIndex(array, value, retHighest) {
  let low = 0
  let high = array == null ? low : array.length

  if (typeof value === 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      // 第一步：求数组中间位置
      // 第二步：比较 value 跟 中间位置的元素大小
      // value 大于 中间元素时，设置中间位置为 数组的起点
      // value 小于 中间元素时，设置中间位置为 数组的结束点
      const mid = (low + high) >>> 1
      const computed = array[mid]
      if (computed !== null && !isSymbol(computed) &&
          (retHighest ? (computed <= value) : (computed < value))) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return high
  }
  return baseSortedIndexBy(array, value, (value) => value, retHighest)
}

export default baseSortedIndex
