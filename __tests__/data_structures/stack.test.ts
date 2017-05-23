'use strict'

import { Stack } from '../../data_structures'

test('stack', () => {
  const stack = new Stack()

  stack.push('one')
  stack.push('two')
  stack.push('three')

  expect(stack.pop()).toBe('three')
  expect(stack.pop()).toBe('two')
  expect(stack.pop()).toBe('one')
})
