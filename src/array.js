/** @module Array */
import { isFunction } from './type'

/**
 * 获取数组的最后一个值
 * @function lastItem
 * @param {array} arr - 源数组
 * @return {*}
 * @example
 * let value = U.lastItem([1, 1, 2, 3])
 * // => 3
 *
 * let value = U.lastItem([])
 * // => undefined
 */
export const lastItem = arr => arr[arr.length -1]

/**
 * 数组去重，返回无重复值的新数组。
 * @function uniqueItems
 * @param {array} arr - 需要去重的源数组
 * @return {array}
 * @example
 * let arr = [1, 1, 2, 3, 3, 4, 5]
 * arr = U.uniqueItems(arr)
 * // => [1, 2, 3, 4, 5]
 */
export const uniqueItems = arr => [...new Set(arr)]

/**
 * 根据提供的比较器函数返回数组的所有唯一值。
 * @function uniqueItemsBy
 * @param {array} arr - 数组
 * @param {function} fn - 比较器函数
 * @param {*} fn.a - 比较元素
 * @param {*} fn.b - 比较元素
 * @param {boolean} [isRight=false] - 可选，默认false，是否从数组最后一个元素开始比较
 * @return {array}
 * @example
 * U.uniqueItemsBy([
 *  { id: 0, value: 'a' },
 *  { id: 1, value: 'b' },
 *  { id: 2, value: 'c' },
 *  { id: 0, value: 'd' }
 * ],
 * (a, b) => a.id == b.id)
 * // => [{ id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }]
 * 
 * U.uniqueItemsBy([
 *  { id: 0, value: 'a' },
 *  { id: 1, value: 'b' },
 *  { id: 2, value: 'c' },
 *  { id: 0, value: 'd' }
 * ],
 * (a, b) => a.id == b.id,
 * true)
 * // => [{ id: 0, value: 'd' }, { id: 2, value: 'c' }, { id: 1, value: 'b' }]
 */
export const uniqueItemsBy = (arr, fn, isRight) => arr[isRight ? 'reduceRight' : 'reduce']((acc, x) => {
  if (!acc.some(y => fn(x, y))) acc.push(x)
  return acc
}, [])

/**
 * 检索数组重复元素，返回新数组。
 * @function repeatItems
 * @param {array} arr - 数组
 * @return {array}
 * @example
 * U.repeatItems([1, 1, 2, 3, 3, 4, 5])
 * // => [1, 3]
 */
export const repeatItems = arr => arr.filter(
  (item, i) => (
    arr.indexOf(item) === i && arr.indexOf(item) !== arr.lastIndexOf(item)
  )
)

/**
 * 初始化一个给定长度以及值的数组。当映射是一个函数时提供迭代的i和数组长度len两个参数。
 * @function initArray
 * @param {number} len - 数组长度
 * @param {*|function} [val|fn=null] - 可选，数组元素的映射值，默认为null；当映射是一个函数时，该函数参数如下表：
 * @param {number} fn.index - 可选，数组中正在处理的当前元素的索引
 * @param {number} fn.length - 可选，数组的长度
 * @return {array}
 * @example
 * console.log(U.initArray(3))
 * // => [null, null, null]
 *
 * const arr = U.initArray(3, {a: 1, b: 2})
 * // => [ { a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 } ]
 *
 * const arr = U.initArray(3, (i) => i * 2)
 * // => [ 0, 2, 4 ]
 */
export const initArray = (len, val = null) => (
  isFunction(val) ? Array.from({length: len}, (item, i) => val(i, len)) : Array.from({length: len}).fill(val)
)

/**
 * 使用函数将数组的值映射到对象，其中键 - 值对由数组原始值作为键和映射值组成。
 * @function mapObject
 * @param {array} arr - 对象键名的数组
 * @param {function(currentValue, index, array)} fn - 生成对象值的映射函数
 * @param {*} fn.currentValue - 数组中正在处理的当前元素
 * @param {number} fn.index - 可选，数组中正在处理的当前元素的索引
 * @param {array} fn.array - 可选，当前正在处理的数组
 * @return {object}
 * @example
 * const obj = U.mapObject([1, 2, 3], i => i * 2)
 * // => {1: 2, 2: 4, 3: 6}
 */
export const mapObject = (arr, fn) => {
  arr = [arr, arr.map(fn)]
  return arr[0].reduce((acc, val, i) => {
    acc[val] = arr[1][i]
    return acc
  }, {})
}

/**
 * 求数组内元素特定键或键映射的平均值
 * @function averageBy
 * @param {array} arr - 求值数组
 * @param {function|string} fn - 键值运算映射函数或键名
 * @return {number}
 * @example
 * const arr = [{a: 1, b: 2}, {a: 2, b: 4}]
 * 
 * U.averageBy(arr, 'a')
 * // => 1.5
 * 
 * U.averageBy(arr, o => o.a * o.b)
 * // => 5
 */
export const averageBy = (arr, fn) => (
  arr.map(isFunction(fn) ? fn : val => val[fn]).reduce((acc, v) => acc + v, 0) / arr.length
)