'use strict'

import * as U from '../src'

test('getType', () => {
  let type = U.getType(new Set([1, 2]))
  expect(type).toBe('set')
  type = U.getType(undefined)
  expect(type).toBe('undefined')
  type = U.getType(null)
  expect(type).toBe('null')
})

test('isNumber', () => {
  const n1 = U.isNumber(3)
  expect(n1).toBeTruthy()
  const n2 = U.isNumber(Number.MIN_VALUE)
  expect(n2).toBeTruthy()
  const n3 = U.isNumber(Infinity)
  expect(n3).toBeTruthy()
  const n4 = U.isNumber('3')
  expect(n4).toBeFalsy()
})

test('isString', () => {
  expect(U.isString('3')).toBeTruthy()
  expect(U.isString(3)).toBeFalsy()
})

test('isNull', () => {
  expect(U.isNull(null)).toBeTruthy()
  expect(U.isNull(3)).toBeFalsy()
})

test('isUndefined', () => {
  expect(U.isUndefined(undefined)).toBeTruthy()
  expect(U.isUndefined(null)).toBeFalsy()
})

test('isBoolean', () => {
  expect(U.isBoolean(false)).toBeTruthy()
  expect(U.isBoolean(null)).toBeFalsy()
})

test('isSymbol', () => {
  expect(U.isSymbol(Symbol('x'))).toBeTruthy()
  expect(U.isSymbol('x')).toBeFalsy()
})

test('isFunction', () => {
  expect(U.isFunction(function () {})).toBeTruthy()
  expect(U.isFunction(3)).toBeFalsy()
})

test('isArray', () => {
  expect(U.isArray([])).toBeTruthy()
  expect(U.isArray({})).toBeFalsy()
  expect(U.isArray(null)).toBeFalsy()
})

test('isObject', () => {
  expect(U.isObject({})).toBeTruthy()
  expect(U.isObject([1, 2])).toBeFalsy()
  expect(U.isObject(null)).toBeFalsy()
})