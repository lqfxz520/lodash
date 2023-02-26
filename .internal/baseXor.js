import baseDifference from './baseDifference.js'
import baseFlatten from './baseFlatten.js'
import baseUniq from './baseUniq.js'

/**
 * The base implementation of methods like `xor` which accepts an array of
 * arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  const length = arrays.length
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : []
  }
  let index = -1
  const result = new Array(length)

  while (++index < length) {
    const array = arrays[index]
    let othIndex = -1

    while (++othIndex < length) {
      if (othIndex != index) {
        // 从第一个 arrays 的第一个子元素数组开始
        // 过滤 arrays 的数组子元素，同时返回新的数组
        // 新数组的元素都是数组
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator)
      }
    }
  }
  // 子元素如果还是数组就会解构，放在外层
  // 去掉重复的元素
  return baseUniq(baseFlatten(result, 1), iteratee, comparator)
}

export default baseXor
