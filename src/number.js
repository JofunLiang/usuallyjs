/** @module Number */
import { isNull } from './type'

/**
 * 检查给定值是否为整数，返回布尔值。
 * @function isInt
 * @param {*} val - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isInt(0)
 * // => true
 *
 * U.isInt(1.15)
 * // => false
 * 
 * U.isInt('3')
 * // => false
 */
export const isInt = val => Math.floor(val) === val

/**
 * 将数字value格式化为千位符数字字符串。如果value是数字，则返回格式化后的字符串，否则报错。
 * @function toThousands
 * @param {number|string} value - 需要千位符格式化的值。
 * @param {string} [separator=','] - 可选，分隔符。
 * @returns {string|NaN}
 * @example
 * U.toThousands(-1545454)
 * // => '-1,545,454'
 *
 * U.toThousands(1545454.1545)
 * // => '1,545,454.1545'
 * 
 * U.toThousands('1545454.1545', '-')
 * // => '1-545-454.1545'
 *
 * U.toThousands(0)
 * // => '0'
 *
 * U.toThousands(null)
 * // => '0'
 *
 * U.toThousands(undefined)
 * // => NaN
 */
export const toThousands = (value, separator = ',') => (
  isNull(value) ? '0' : isNaN(Number(value))
    ? NaN : `${value}`.split('.').map(
      (v, i) => i === 0 ? v.replace(/([-|+]?\d)(?=(\d{3})+$)/g, `$1${separator}`) : v,
    ).join('.')
)

/**
 * 数字value是否在两个数之间。如果不设置end，则start默认为0，判断value是否在0与start之间。
 * @function inRange
 * @param {number} value - 需要判断的数值。
 * @param {number} [start=0] - 起点值，只提供两个参数时start默认为0。
 * @param {number} end - 终点值，只提供两个参数时取第二个参数值为该值，且起点值为0。
 * @return {boolean}
 * @example
 * U.inRange(5, 4)
 * // => false
 *
 * U.inRange(5, 7)
 * // => true
 *
 * U.inRange(5, 4, 7)
 * // => true
 *
 * U.inRange(5, 7, 10)
 * // => false
 *
 * U.inRange(5, 10, 7)
 * // => false
 */
export const inRange = (value, start, end = null) => {
  if (end && start > end) [end, start] = [start, end]
  return isNull(end) ? value >= 0 && value < start : value >= start && value < end
}

/**
 * 四舍五入函数
 * @function round
 * @param {number} val - 数字。
 * @param {number} [decimals=0] - 可选，保留的数字精度，默认为0。
 * @return {number}
 * @example
 * U.round(1.2006, 3)
 * // => 1.201
 *
 * U.round(1.2006)
 * // => 1
 */
export const round = (val, decimals = 0) => Number(`${Math.round(`${val}e${decimals}`)}e-${decimals}`)

/**
 * 生成一个start～end之间随机数字
 * @function random
 * @param {number} start - 可选，数字。
 * @param {number} end - 可选，数字。
 * @return {number}
 * @example
 * const a = U.random()
 * // => 0 < a < 1
 *
 * const b = U.random(3)
 * // => 0 < b < 3
 * 
 * const c = U.random(3, 5)
 * // => 3 < c < 5
 * 
 * const d = U.random(5, 3)
 * // => 3 < d < 5
 * 
 * const e = U.random(-1)
 * // => -1 < e < 0
 * 
 * const f = U.random(-1, 1)
 * // => -1 < f < 1
 */
export const random = (start, end) => (
  start && end
    ? Math.random() * (Math.abs(start - end)) + Math.min(start, end)
    : Math.random() * (start || end || 1)
)
