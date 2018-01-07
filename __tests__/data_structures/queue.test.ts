import { Queue } from "../../src/data_structures";

test("queue", () => {
  const queue = new Queue<string>();

  queue.enqueue("one");
  queue.enqueue("two");
  queue.enqueue("three");
  expect(queue.dequeue()).toBe("one");
  expect(queue.dequeue()).toBe("two");
  expect(queue.dequeue()).toBe("three");
});
