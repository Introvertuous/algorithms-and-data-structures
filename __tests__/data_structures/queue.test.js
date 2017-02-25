'use strict';

const { Queue } = require('.');

test('queue', () => {
    let queue = Queue.create();
    queue.enqueue('one');
    queue.enqueue('two');
    queue.enqueue('three');
    expect(queue.dequeue()).toBe('one');
    expect(queue.dequeue()).toBe('two');
    expect(queue.dequeue()).toBe('three');
});