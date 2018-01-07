import { BinSearchTree } from "../../src/data_structures";

const tree = new BinSearchTree<number>();
tree.add(4);
tree.add(2);
tree.add(76);
tree.add(3);
tree.add(54);
tree.add(1);

test("contains", () => {
  expect(tree.contains(54)).toBe(true);
  expect(tree.contains(1335)).toBe(false);
});

test("toArray", () => {
  expect(tree.toArray()).toEqual([1, 2, 3, 4, 54, 76]);
});

test("size", () => {
  expect(tree.size()).toBe(6);
});

test("height", () => {
  expect(tree.height()).toEqual(2);
});
