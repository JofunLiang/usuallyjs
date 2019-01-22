/** @module Object */

/**
 * 对象深复制函数
 * @function deepClone
 * @param {object} obj - 深复制的源对象
 * @return {object}
 * @example
 * var a = { foo: 'bar', obj: { a: 1, b: 2 } }
 * var b = U.deepClone(a)
 * b.foo = 'foo'
 * // => a = { foo: 'bar', obj: { a: 1, b: 2 } }, b = { foo: 'foo', obj: { a: 1, b: 2 } }
 */
export const deepClone = obj => {
  let clone = Object.assign({}, obj)
  Object.keys(clone).forEach(k => {
    clone[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k]
  })
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone
}

/**
 * 对象深冻结函数
 * @function deepFreeze
 * @param {object} obj - 深冻结的源对象
 * @return {object}
 * @example
 * let arr = [1, [2, 3]]
 * const o = U.deepFreeze(arr)
 * o[0] = 3
 * o[1][0] = 4
 * // => arr = [1, [2, 3]], o = [1, [2, 3]]
 */
export const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (obj[prop] instanceof Object && obj[prop] !== null) {
      deepFreeze(obj[prop])
    }
  })
  return Object.freeze(obj)
}

/**
 * 为对象中的属性分配默认值。
 * @function defaults
 * @param {object} obj - 目标对象
 * @param {...object} defs - 源对象（用于扩展目标对象属性）
 * @return {object}
 * @example
 * U.defaults({ a: 1, c: 5, d: 8}, { b: 2 }, { a: 3, c: 7})
 * // => { a: 1, c: 5, d: 8, b: 2 }
 */
export const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj)

/**
 * 重命名对象的key名称。
 * @function renameKeys
 * @param {object} map - 由oldKey：newKey键值对组成的对象
 * @param {object} obj - 目标对象
 * @return {object}
 * @example
 * let obj = {name: 'john', job: 'fonts', detail: [1, 2]}
 * U.renameKeys({job: 'possion'}, obj)
 * // => { name: 'john', possion: 'fonts', detail: [ 1, 2 ] }
 */
export const renameKeys = (map, obj) => (
  Object.keys(obj)
    .reduce((acc, key) => ({
      ...acc,
      ...{ [map[key] || key]: obj[key] }
    }), {})
)

/**
 * 从对象中省略与给定键对应的键值对。
 * @function omit
 * @param {object} obj - 目标对象
 * @param {array} arr - 省略的键名数组
 * @return {object}
 * @example
 * U.omit({ a: 1, b: '2', c: 3 }, ['b'])
 * // => { a: 1, c: 3 }
 */
export const omit = (obj, arr) => (
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
)

/**
 * 判断val是否是空对象。
 * @function isEmpty
 * @param {*} val - 检查的对象
 * @return {boolean}
 * @example
 * U.isEmpty(new Map()) // => true
 * U.isEmpty(new Set()) // => true
 * U.isEmpty({}) // => true
 * U.isEmpty([]) // => true
 * U.isEmpty('') // => true
 * U.isEmpty({a: 1}) // => false
 * U.isEmpty([2]) // => false
 * U.isEmpty('text') // => false
 * U.isEmpty(123) // => true
 * U.isEmpty(true) // => true
 * U.isEmpty(false) // => true
 */
export const isEmpty = val => !(Object.keys(val) || val).length
