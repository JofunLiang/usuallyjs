'use strict'

import * as U from '../src/date'

test('dateFormat', () => {
  let d = U.dateFormat(new Date(2018, 11, 10))
  expect(d).toBe('2018-12-10')
  d = U.dateFormat() === U.dateFormat(new Date())
  expect(d).toBeTruthy()
  d = U.dateFormat(new Date(2018, 11, 10, 10, 29, 36), 'YYYY-MM-DD hh:mm:ss')
  expect(d).toBe('2018-12-10 10:29:36')
  d = U.dateFormat(1545484848484, 'YYYY-MM-DD hh:mm:ss')
  expect(d).toBe('2018-12-22 21:20:48')
})

test('getMonthDays', () => {
  let d = U.getMonthDays(new Date(2018, 1))
  expect(d).toBe(28)
  d = U.getMonthDays()
  expect(d).toBe(U.getMonthDays(new Date()))
  d = U.getMonthDays('2018/2/1')
  expect(d).toBe(28)
  d = U.getMonthDays(153454878787)
  expect(d).toBe(30)
})

test('getWeekday', () => {
  let d = U.getWeekday(undefined, new Date(2018, 1, 1))
  expect(d).toBe('星期四')
  d = U.getWeekday('zh', new Date(2018, 1, 1))
  expect(d).toBe('星期四')
  d = U.getWeekday()
  expect(d).toBe(U.getWeekday(undefined, new Date()))
  d = U.getWeekday('en', new Date(2018, 1, 1))
  expect(d).toBe('Thursday')
  d = U.getWeekday('zh', '2018/2/1')
  expect(d).toBe('星期四')
  d = U.getWeekday('en', 153454878787)
  expect(d).toBe('Tuesday')
})

test('prevMonth', () => {
  expect(U.prevMonth).toBeInstanceOf(Function)
  let d = U.prevMonth(new Date(2018, 10, 9)).toISOString()
  expect(d).toBe('2018-10-08T16:00:00.000Z')
  d = U.prevMonth(153454878787).toISOString()
  expect(d).toBe('1974-10-12T02:21:18.787Z')
  d = U.prevMonth('2018/12/3').toISOString()
  expect(d).toBe('2018-11-02T16:00:00.000Z')
})

test('nextMonth', () => {
  let d = U.nextMonth(new Date(2018, 10, 9)).toISOString()
  expect(d).toBe('2018-12-08T16:00:00.000Z')
  d = U.nextMonth(153454878787).toISOString()
  expect(d).toBe('1974-12-12T02:21:18.787Z')
  d = U.nextMonth('2018/12/3').toISOString()
  expect(d).toBe('2019-01-02T16:00:00.000Z')
})

test('isAfterDate', () => {
  expect(U.isAfterDate).toBeInstanceOf(Function)
  let d = U.isAfterDate('2018/11/1', '2018/11/30')
  expect(d).toBeFalsy()
  d = U.isAfterDate(new Date(2018, 12, 11), new Date(2018, 12, 10))
  expect(d).toBeTruthy()
})

test('spreadDate', () => {
  let d = U.spreadDate(7, new Date(2018, 9, 10)).toISOString()
  expect(d).toBe('2018-10-16T16:00:00.000Z')
  d = U.spreadDate(1).getTime() - U.spreadDate(-1).getTime() === 172800000
  expect(d).toBeTruthy()
})
