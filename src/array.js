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
 * 初始化一个给定长度以及值的数组。当value是函数时提供迭代的i和数组长度len两个参数。
 * @function initArray
 * @param {number} len - 数组长度
 * @param {*} [value=null] - 可选，初始化的值，默认为null，当value是函数时提供迭代的i和数组长度len两个参数。
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
export const initArray = (len, value = null) => (
  isFunction(value) ? Array.from({length: len}, (item, i) => value(i, len)) : Array.from({length: len}).fill(value)
)

/**
 * 使用函数将数组的值映射到对象，其中键 - 值对由数组原始值作为键和映射值组成。
 * @function mapObject
 * @param {array} arr - 对象键名的数组
 * @param {function} fn - 生成对象值的映射函数
 * @param {*} currentValue - 数组中正在处理的当前元素
 * @param {number} index - 可选，数组中正在处理的当前元素的索引
 * @param {array} array - 可选，当前正在处理的数组
 * @return {object}
 * @example
 * const obj = mapObject([1, 2, 3], i => i * 2)
 * // => {1: 2, 2: 4, 3: 6}
 */
export const mapObject = (arr, fn) => {
  arr = [arr, arr.map(fn)]
  return arr[0].reduce((acc, val, i) => {
    acc[val] = arr[1][i]
    return acc
  }, {})
}
