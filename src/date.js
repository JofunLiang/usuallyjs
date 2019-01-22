/** @module Date */

/**
 * 格式化日期。如果value无法被new Date()转换为日期对象，返回空字符串。
 * @function dateFormat
 * @param {date} [date=new Date()] - 可选，需要格式化的日期，默认是当前时间。
 * @param {string} [format='YYYY-MM-DD']- 可选，格式化的格式，默认是`YYYY-MM-DD`格式。
 * @return {string}
 * @example
 * U.dateFormat(new Date(2018, 11, 10))
 * // => '2018-12-10'
 *
 * U.dateFormat(new Date(2018, 11, 10, 10, 29, 36), 'YYYY-MM-DD hh:mm:ss')
 * // => '2018-12-10 10:29:36'
 *
 * U.dateFormat(1545484848484, 'YYYY-MM-DD hh:mm:ss')
 * // => '2018-12-22 21:20:48'
 */
export const dateFormat = (date = new Date(), format = 'YYYY-MM-DD') => {
  const d = new Date(date)
  const zeroize = val => val < 10 ? `0${val}` : `${val}`
  return format.replace(
    /YYYY|MM|DD|hh|mm|ss/g,
    word => ({
      'YYYY': d.getFullYear(),
      'MM': zeroize(d.getMonth() + 1),
      'DD': zeroize(d.getDate()),
      'hh': zeroize(d.getHours()),
      'mm': zeroize(d.getMinutes()),
      'ss': zeroize(d.getSeconds())
    }[word] || word)
  )
}

/**
 * 获取某月的总天数，date可以是任意能被new Date()格式化为日期对象的值。
 * @function getMonthDays
 * @param {date} [date=new Date()] - 可选，日期，默认是当前时间。
 * @return {number}
 * @example
 * U.getMonthDays(new Date(2018, 1))
 * // => 28
 *
 * U.getMonthDays(153454878787)
 * // => 30
 */
export const getMonthDays = (date = new Date()) => {
  const d = new Date(date)
  d.setMonth(d.getMonth() + 1)
  d.setDate(0)
  return d.getDate()
}

/**
 * 获取星期名称，lang代表输出语言。date为日期，可以是任意能被new Date()格式化为日期对象的值。
 * @function getWeekday
 * @param {string} [lang='zh'] - 可选，输出语言，默认为'zh'，当该值为undefined时取'zh'——表示中文，'en'——表示英文。
 * @param {data} [date=new Date()] - 可选，日期，默认为当前日期。
 * @return {string}
 * @example
 * U.getWeekday('zh', new Date(2018, 1, 1))
 * // => '星期四'
 *
 * * U.getWeekday('zh', '2018/2/1')
 * // => '星期四'
 * 
 * U.getWeekday('en', 153454878787)
 * // => 'Tuesday'
 */
export const getWeekday = (lang = 'zh', date = new Date()) => {
  const day = new Date(date).getDay()
  return lang === 'en'
    ? ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day]
    : '星期' + '日一二三四五六'.charAt(day)
}

/**
 * 获取上一个月份
 * @function prevMonth
 * @param {*} [date=new Date()]- 可选，日期，默认是当前时间。
 * @return {date}
 * @example
 * U.prevMonth()
 * // => 2018-11-20T17:07:37.937Z (当前时间为2018-12)
 *
 * U.prevMonth(new Date(2018, 10, 9))
 * // => 2018-10-08T16:00:00.000Z
 * 
 * U.prevMonth(153454878787)
 * // => 1974-10-12T02:21:18.787Z
 * 
 * U.prevMonth('2018/12/3')
 * // => 2018-11-02T16:00:00.000Z
 */
export const prevMonth = (date = new Date()) => {
  let d = new Date(date)
  d.setMonth(d.getMonth() - 1)
  return d
}

/**
 * 获取下一个月份
 * @function nextMonth
 * @param {date} [date=new Date()] - 可选，日期，默认是当前时间。
 * @return {date}
 * @example
 * U.nextMonth()
 * // => 2019-01-20T17:13:15.179Z (当前时间为2018-12)
 *
 * U.nextMonth(new Date(2018, 10, 9))
 * // => 2018-10-08T16:00:00.000Z
 * 
 * U.nextMonth(153454878787)
 * // => 1974-12-12T02:21:18.787Z
 * 
 * U.nextMonth('2018/12/3')
 * // => 2018-11-02T16:00:00.000Z
 */
export const nextMonth = (date = new Date()) => {
  let d = new Date(date)
  d.setMonth(d.getMonth() + 1)
  return d
}

/**
 * 比较日期dateA是否是dateB之后的日期，返回布尔值
 * @function isAfterDate
 * @param {date} dateA - 较后的日期。
 * @param {date} dateB - 较前的日期。
 * @return {boolean}
 * @example
 * U.isAfterDate('2018/11/1', '2018/11/30')
 * // => false
 *
 * U.isAfterDate(new Date(2018, 12, 11), new Date(2018, 12, 10))
 * // => true
 */
export const isAfterDate = (dateA, dateB) => new Date(dateA) > new Date(dateB)
