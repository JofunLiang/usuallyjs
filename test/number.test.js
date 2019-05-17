'use strict'

import * as U from '../src/number'

test('isInt', () => {
  expect(U.isInt(0)).toBeTruthy()
  expect(U.isInt(1.15)).toBeFalsy()
  expect(U.isInt('3')).toBeFalsy()
})

test('toThousands', () => {
  expect(U.toThousands(-1545454)).toBe('-1,545,454')
  expect(U.toThousands(1545454.1545)).toBe('1,545,454.1545')
  expect(U.toThousands('1545454.1545', '-')).toBe('1-545-454.1545')
  expect(U.toThousands(0)).toBe('0')
  expect(U.toThousands(null)).toBe('0')
  expect(U.toThousands(undefined)).toBe(NaN)
})

test('inRange', () => {
  expect(U.inRange(5, 4)).toBeFalsy()
  expect(U.inRange(5, 7)).toBeTruthy()
  expect(U.inRange(5, 4, 7)).toBeTruthy()
  expect(U.inRange(5, 7, 10)).toBeFalsy()
  expect(U.inRange(5, 10, 7)).toBeFalsy()
})

test('round', () => {
  expect(U.round(1.2006, 3)).toBe(1.201)
  expect(U.round(1.2006)).toBe(1)
})

test('random', () => {
  let a = U.random()
  expect(a > 0 && a < 1).toBeTruthy()
  a = U.random(3)
  expect(a > 0 && a < 3).toBeTruthy()
  a = U.random(undefined, 3)
  expect(a > 0 && a < 3).toBeTruthy()
  a = U.random(3, 5)
  expect(a > 3 && a < 5).toBeTruthy()
  a = U.random(5, 3)
  expect(a > 3 && a < 5).toBeTruthy()
  a = U.random(-1)
  expect(a > -1 && a < 0).toBeTruthy()
  a = U.random(-5, -3)
  expect(a > -5 && a < -3).toBeTruthy()
})

test('keepFixed', () => {
  let a = U.keepFixed(-15.12, 4) === '-15.1200'
  expect(a).toBeTruthy()
  a = U.keepFixed(-15.12, 4, false) === '-15.12'
  expect(a).toBeTruthy()
  a = U.keepFixed(15, 4) === '15.0000'
  expect(a).toBeTruthy()
  a = U.keepFixed(15, 4, false) === '15'
  expect(a).toBeTruthy()
  a = U.keepFixed(15.1234564, 4, false) === '15.1234'
  expect(a).toBeTruthy()
})