'use strict'

import { Queue } from '../../data_structures'

test('queue', () => {
  const queue = new Queue()

  queue.enqueue('one')
  queue.enqueue('two')
  queue.enqueue('three')
  expect(queue.dequeue()).toBe('one')
  expect(queue.dequeue()).toBe('two')
  expect(queue.dequeue()).toBe('three')
})
