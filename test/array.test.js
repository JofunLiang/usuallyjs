'use strict'

import * as U from '../src'

test('lastItem', () => {
  const item = U.lastItem([1, 1, 2, 3])
  expect(item).toBe(3)
  expect(U.lastItem([])).toBeUndefined()
})

test('uniqueItems', () => {
  const arr = U.uniqueItems([1, 1, 2, 3, 3, 4, 5])
  expect(arr).toEqual([1, 2, 3, 4, 5])
})

test('uniqueItemsBy', () => {
  const arr = [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 0, value: 'd' }
  ]
  expect(U.uniqueItemsBy(arr, (a, b) => a.id == b.id))
  .toEqual([
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' }
  ])
  expect(U.uniqueItemsBy(arr, (a, b) => a.id == b.id, true))
  .toEqual([
    { id: 0, value: 'd' },
    { id: 2, value: 'c' },
    { id: 1, value: 'b' }
  ])
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

test('mapObject', () => {
  let obj = U.mapObject([1, 2, 3], val => val * 2)
  expect(obj).toEqual({1: 2, 2: 4, 3: 6})
})

test('averageBy', () => {
  const arr = [{a: 1, b: 2}, {a: 2, b: 4}]
  let r = U.averageBy(arr, 'a')
  expect(r).toBe(1.5)
  r = U.averageBy(arr, o => o.a * o.b)
  expect(r).toBe(5)
})

test('maxBy', () => {
  const arr = [{a: 1, b: 2}, {a: 2, b: 4}]
  let r = U.maxBy(arr, 'a')
  expect(r).toBe(2)
  r = U.maxBy(arr, o => o.a * o.b)
  expect(r).toBe(8)
})

test('minBy', () => {
  const arr = [{a: 1, b: 2}, {a: 2, b: 4}]
  let r = U.minBy(arr, 'a')
  expect(r).toBe(1)
  r = U.minBy(arr, o => o.a * o.b)
  expect(r).toBe(2)
})