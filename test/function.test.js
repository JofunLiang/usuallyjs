'use strict'

import * as U from '../src/function'

test('once', () => {
  expect(U.once).toBeInstanceOf(Function)
  expect(typeof U.once(x => 10)).toBe('function')
  const fn = U.once(() => '5')
  expect([fn(), fn()]).toEqual(['5', undefined])
})

test('bind', () => {
  expect(U.bind).toBeInstanceOf(Function)
  function greet (greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation
  }
  const freddy = { user: 'fred' }
  const freddyBound = U.bind(greet, freddy)
  expect(freddyBound('hi', '!')).toBe('hi fred!')
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