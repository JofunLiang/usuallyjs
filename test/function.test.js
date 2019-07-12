'use strict'

import * as U from '../src'

test('once', () => {
  expect(U.once).toBeInstanceOf(Function)
  expect(typeof U.once(x => 10)).toBe('function')
  const fn = U.once(() => '5')
  expect([fn(), fn()]).toEqual(['5', undefined])
})

test('debounce', () => {
  expect(U.debounce).toBeInstanceOf(Function)
  U.debounce(() => {
    expect(true).toBeTruthy();
  })
})

test('throttle', () => {
  expect(U.throttle).toBeInstanceOf(Function)
  let throttled = U.throttle(x => x, 100000);
  expect(throttled).toBeInstanceOf(Function);
  expect(throttled(10)).toBe(undefined);
})

test('pipe', () => {
  expect(U.pipe).toBeInstanceOf(Function)
})
