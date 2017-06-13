("use strict");

import { SinglyLinkedList } from "../../src/data_structures";

test("stack", () => {
  const stack = new SinglyLinkedList<string>();

  stack.pushFirst("hello");
  stack.pushFirst("sweet");
  stack.pushFirst("world");

  expect(stack.popFirst()).toBe("world");
  expect(stack.popFirst()).toBe("sweet");
  expect(stack.popFirst()).toBe("hello");
});

test("queue", () => {
  const queue = new SinglyLinkedList<string>();

  queue.pushLast("hello");
  queue.pushLast("sweet");
  queue.pushLast("world");

  expect(queue.popFirst()).toBe("hello");
  expect(queue.popFirst()).toBe("sweet");
  expect(queue.popFirst()).toBe("world");
});

test("reverse stack", () => {
  const stack = new SinglyLinkedList<string>();

  stack.pushFirst("hello");
  stack.pushFirst("sweet");
  stack.pushFirst("world");
  stack.reverse();

  expect(stack.popFirst()).toBe("hello");
  expect(stack.popFirst()).toBe("sweet");
  expect(stack.popFirst()).toBe("world");
});

test("middle", () => {
  const stack = new SinglyLinkedList<string>();

  stack.pushFirst("hello");
  stack.pushFirst("sweet");
  stack.pushFirst("world");

  expect(stack.middle()).toBe("sweet");
});
