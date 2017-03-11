'use strict';

const { SinglyLinkedList } = require('.');

test('stack', () => {
  let stack = SinglyLinkedList.create();
  stack.pushFirst('hello');
  stack.pushFirst('sweet');
  stack.pushFirst('world');
  expect(stack.popFirst()).toBe('world');
  expect(stack.popFirst()).toBe('sweet');
  expect(stack.popFirst()).toBe('hello');
});

test('queue', () => {
  let queue = SinglyLinkedList.create();
  queue.pushLast('hello');
  queue.pushLast('sweet');
  queue.pushLast('world');
  expect(queue.popFirst()).toBe('hello');
  expect(queue.popFirst()).toBe('sweet');
  expect(queue.popFirst()).toBe('world');
});

test('reverse stack', () => {
  let stack = SinglyLinkedList.create();
  stack.pushFirst('hello');
  stack.pushFirst('sweet');
  stack.pushFirst('world');
  stack.reverse();
  expect(stack.popFirst()).toBe('hello');
  expect(stack.popFirst()).toBe('sweet');
  expect(stack.popFirst()).toBe('world');
});

test('middle', () => {
  let stack = SinglyLinkedList.create();
  stack.pushFirst('hello');
  stack.pushFirst('sweet');
  stack.pushFirst('world');
  expect(stack.middle()).toBe('sweet');
});

test('iterator', () => {
  let stack = SinglyLinkedList.create();
  stack.pushFirst('hello');
  stack.pushFirst('sweet');
  stack.pushFirst('world');

  let result = [];
  for(let v of stack) 
    result.push(v.data);
  expect(result).toEqual(['world', 'sweet', 'hello']);
});
