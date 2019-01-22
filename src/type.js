/** @module Type */

/**
 * 返回val的类型。
 * @function getType
 * @param {*} val - 需要检查的值。
 * @return {string}
 * @example
 * U.getType(new Set([1, 2]))
 * // => 'set'
 */
export const getType = val => (
  isUndefined(val)  ? 'undefined' : isNull(val) ? 'null' : val.constructor.name.toLowerCase()
)

/**
 * 检查value是否为number类型。使用typeof来检查，返回布尔值。
 * @function isNumber
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isNumber(3)
 * // => true
 *
 * U.isNumber(Number.MIN_VALUE)
 * // => true
 *
 * U.isNumber(Infinity)
 * // => true
 *
 * U.isNumber('3')
 * // => false 
 */
export const isNumber = value => typeof value === 'number'

/**
 * 检查值是否为字符串。使用typeof来检查，返回布尔值。
 * @function isString
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isString(3)
 * // => false
 *
 * U.isString('3')
 * // => true
 */
export const isString = value => typeof value === 'string'

/**
 * 检查值是否为null对象。使用typeof来检查，返回布尔值。
 * @function isNull
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isNull(3)
 * // => false
 *
 * U.isNull(null)
 * // => true
 */
export const isNull = value => value === null

/**
 * 检查值是否为undefined对象。使用typeof来检查，返回布尔值。
 * @function isUndefined
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isUndefined(undefined)
 * // => true
 *
 * U.isUndefined(null)
 * // => false
 */
export const isUndefined = value => value === undefined

/**
 * 检查值是否为布尔值。使用typeof来检查，返回布尔值。
 * @function isBoolean
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isBoolean(false)
 * // => true
 *
 * U.isBoolean(null)
 * // => false
 */
export const isBoolean = value => typeof value === 'boolean'

/**
 * 检查值是否为symbol类型。使用typeof来检查，返回布尔值。
 * @function isSymbol
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isSymbol(Symbol('x'))
 * // => true
 */
export const isSymbol = value => typeof value === 'symbol'

/**
 * 检查值是否为function类型。使用typeof来检查，返回布尔值。
 * @function isFunction
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isFunction(3)
 * // => false
 *
 * U.isFunction(function () {})
 * // => true
 */
export const isFunction = value => typeof value === 'function'

/**
 * 使用Array.isArray方法检查arr是否为数组类型，返回布尔值。
 * @function isArray
 * @param {*} arr - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isArray([])
 * // => true
 *
 * U.isArray(null)
 * // => false
 */
export const isArray = arr => Array.isArray(arr)

/**
 * 检查alue是否为对象类型，返回布尔值。
 * @function isObject
 * @param {*} value - 需要检查的值。
 * @return {boolean}
 * @example
 * U.isObject(null)
 * // => false
 *
 * U.isObject([1, 2])
 * // => false
 *
 * U.isObject({})
 * // => true
 */
export const isObject = value => value instanceof Object && !isArray(value)
