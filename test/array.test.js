'use strict'

import * as U from '../src/array'

test('lastItem', () => {
  const item = U.lastItem([1, 1, 2, 3])
  expect(item).toBe(3)
  expect(U.lastItem([])).toBeUndefined()
})

test('uniqueItems', () => {
  const arr = U.uniqueItems([1, 1, 2, 3, 3, 4, 5])
  expect(arr).toEqual([1, 2, 3, 4, 5])
})

test('repeatItems', () => {
  const arr = U.repeatItems([1, 1, 2, 3, 3, 4, 5])
  expect(arr).toEqual([1, 3])
})

test('initArray', () => {
  const arr1 = U.initArray(3)
  expect(arr1).toEqual([null, null, null])
  const arr2 = U.initArray(3, {a: 1, b: 2})
  expect(arr2).toEqual([{a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2}])
  const arr3 = U.initArray(3, (i) => i * 2)
  expect(arr3).toEqual([ 0, 2, 4 ])
})