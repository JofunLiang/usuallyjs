/** @module String */
import { isUndefined } from './type'
import { random } from './number'

/**
 * 获取字符串的字节长度
 * @function byteSize
 * @param {string} str - 字符串
 * @return {number}
 * @example
 * U.byteSize('日')
 * // => 3
 *
 * U.byteSize('12')
 * // => 2
 *
 * U.byteSize('hello')
 * // => 5
 */
export const byteSize = str => new Blob([str]).size

/**
 * 反转字符串
 * @function reverseString
 * @param {string} str - 字符串
 * @return {str}
 * @example
 * U.reverseString('hello!')
 * // => '!olleh'
 */
export const reverseString = str => [...str].reverse().join('')

/**
 * 向URL追加参数
 * @function stringifyURL
 * @param {string} url - URL路径
 * @param {object} params - 参数对象
 * @return {string}
 * @example
 * U.stringifyURL('https://www.google.com/', {name: 'john', age: 30})
 * // => 'https://www.google.com/?name=john&age=30'
 */
export const stringifyURL = (url, params) => {
  url += (/\?/).test(url) ? '&' : '?'
  return url += Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
}

/**
 * 解析URL参数
 * @function parseURL
 * @param {string} url - 字符串
 * @return {object}
 * @example
 * U.parseURL('http://url.com/page?name=Adam&surname=Smith')
 * // => {name: 'Adam', surname: 'Smith'}
 *
 * U.parseURL('https://www.google.com/')
 * // => {}
 */
export const parseURL = url => {
  const arr = url.match(/([^?=&]+)(=([^&]*))/g) || []
  return arr.reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})
}

/**
 * 移除字符串中的HTML标签
 * @function removeHTML
 * @param {string} str - 字符串
 * @return {string}
 * @example
 * const str = '<p>这是<em>一个</em>段落。</p>'
 * U.removeHTML(str)
 * // => '这是一个段落。'
 */
export const removeHTML = str => str.replace(/<[^>]*>/g, '')

/**
 * 转义特殊字符
 * @function escapeHTML
 * @param {string} str - 字符串
 * @return {string}
 * @example
 * const str = '<a href="#">you & me</a>'
 * U.escapeHTML(str)
 * // => '&lt;a href=&quot;#&quot;&gt;you &amp; me&lt;/a&gt;'
 */
export const escapeHTML = str => str.replace(
  /[&<>"]/g,
  tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  }[tag] || tag)
)

/**
 * 反转义特殊字符
 * @function unescapeHTML
 * @param {string} str - 字符串
 * @return {string}
 * @example
 * const str = '&lt;a href=&quot;#&quot;&gt;you &amp; me&lt;/a&gt;'
 * U.unescapeHTML(str)
 * // => '<a href="#">you & me</a>'
 */
export const unescapeHTML = str => str.replace(
  /&amp;|&lt;|&gt;|&quot;/g,
  tag => ({
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"'
  }[tag] || tag)
)

/**
 * 使用指定的掩码字符替换start~end之间的所有字符
 * @function mask
 * @param {string|number} str - 字符串
 * @param {number} [start=0] - 可选，开始位置，默认为0（即字符串开头）
 * @param {number} [end=0] - 可选，结束位置，默认为0（即字符串结尾）
 * @param {string} [mask='*'] - 可选，掩码字符，默认为'*'号
 * @return {string}
 * @example
 * U.mask(123456789) // => *********
 * U.mask(123456789, 3) // => 123******
 * U.mask(str, 0, 4) // => *****6789
 * U.mask(str, 3, 4) // => 123**6789
 * U.mask(str, 3, 4, '&') // => 123&&6789
 */
export const mask = (str, start = 0, end = 0, mask = '*') => [...`${str}`].map(
  (v, i) => i >= start && i < `${str}`.length - end ? mask : v
).join('')

/**
 * 随机生成16进制色值
 * @function randomHex
 * @return {string}
 * @example
 * U.randomHex()
 * // => "#f13ba7"
 */
export const randomHex = () => '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)

/**
 * 随机生成rgba色值
 * @function randomRgba
 * @param {number} [min=0] - 可选，最小色阶
 * @param {number} [max=256] - 可选，最大色阶
 * @param {number} [alpha=1] - 可选，透明度
 * @return {string}
 * @example
 * U.randomRgba()
 * // => rgba(223,135,252,1)
 * 
 * U.randomRgba(154, 211, 0.5)
 * // => rgba(191,178,179,0.5)
 */
export const randomRgba = (min = 0, max = 256, alpha = 1) => {
  const color = Array.from({ length: 3 })
    .reduce(acc => [...acc, Math.floor(random(min, max))], [])
    .concat(alpha ? [alpha] : [0])
    .join(',')
  return `rgba(${color})`
}

/**
 * 将3位16进制色值转为6位
 * @function extendHex
 * @param {string} shortHex - 字符串
 * @return {string}
 * @example
 * U.extendHex('#03f')
 * // => '#0033ff'
 * 
 * U.extendHex('05a')
 * // => '#0055aa'
 */
export const extendHex = shortHex => {
  return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('')
}

/**
 * 将16进制hex色值转为rgb（或rgba）色值
 * @function hexToRGB
 * @param {string} hex - 字符串，16进制hex色值
 * @param {number} alpha - 可选，色彩透明度
 * @return {string}
 * @example
 * U.hexToRGB('#e5f')
 * // => rgb(238,85,255)
 * 
 * U.hexToRGB('e5f')
 * // => rgb(238,85,255)
 * 
 * U.hexToRGB('#e5f', 0.5)
 * // => rgba(238,85,255,0.5)
 */
export const hexToRGB = (hex, alpha) => {
  const hasAlpha = !isUndefined(alpha)
  let result = hex.slice(hex.startsWith('#') ? 1 : 0)
  if (result.length === 3) result = [...result].map(s => s + s).join('')
  result = result.match(/[0-9a-f]{2}/gi)
    .map(s => parseInt(s, 16))
    .concat(hasAlpha ? [alpha] : [])
    .join(',')
  return `rgb${hasAlpha ? 'a' : ''}(${result})`
}

/**
 * 将rgb（或rgba）色值转为16进制hex色值
 * @function RGBToHex
 * @param {string} rgb - 字符串，rgb（或rgba）色值
 * @return {string}
 * @example
 * U.RGBToHex('rgb(238,85,255)')
 * // => #ee55ff
 * 
 * U.RGBToHex('rgba(238,85,255,0.5)')
 * // => #ee55ff
 */
export const RGBToHex = rgb => {
  return '#' + rgb.match(/\d{1,3}/g)
    .slice(0, 3)
    .map(s => Number(s).toString(16).padStart(2, '0'))
    .join('')
}

/**
 * 解析cookie字符串
 * @function parseCookie
 * @param {string} str - 字符串
 * @return {object}
 * @example
 * U.parseCookie('taken=bar; equation=E%3Dmc%5E2')
 * // => {taken: 'bar', equation: 'E=mc^2'}
 */
export const parseCookie = str => {
  return str.split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})
}

/**
 * 字符串转日期对象
 * @function stringToDate
 * @param {string} str - 字符串
 * @return {date}
 * @example
 * U.stringToDate('2019/5-06')
 * // => Mon May 06 2019 00:00:00 GMT+0800 (中国标准时间)
 * 
 * U.stringToDate('2019-5-06 20:21:22:500')
 * // => Mon May 06 2019 20:21:22 GMT+0800 (中国标准时间)
 */
export const stringToDate = str => {
  let arr = str.split(/[^0-9]+/)
  if (arr[1]) {
    arr[1] = Number(arr[1]) - 1
  }
  return new Date(...arr)
}

/**
 * 驼峰字符串转横线连接字符串
 * @function camelToDash
 * @param {string} str - 驼峰字符串
 * @return {string}
 * @example 
 * U.camelToDash('camelCase')
 * => 'camel-case'
 */
export const camelToDash = str => str.replace(/([A-Z])/g,"-$1").toLowerCase()

/**
 * 横线连接字符串转驼峰字符串
 * @function dashToCamel
 * @param {string} str - 横线连接字符串
 * @return {string}
 * @example 
 * U.camelToDash('dash-case')
 * => 'dashCase'
 */
export const dashToCamel = str => str.replace(/\-(\w)/g, (a, l) => l.toUpperCase())
