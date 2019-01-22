'use strict'

import * as U from '../src/function'

test('once', () => {
  const fn = U.once(() => '5')
  expect([fn(), fn()]).toEqual(['5', undefined])
})

test('bind', () => {
  function greet (greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation
  }
  const freddy = { user: 'fred' }
  const freddyBound = U.bind(greet, freddy)
  expect(freddyBound('hi', '!')).toBe('hi fred!')
})