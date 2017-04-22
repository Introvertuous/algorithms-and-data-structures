'use strict';

const { bubbleSort } = require('.');

test('sort', () => {
  let data = [5, 4, 7, 4, 3, 2, 6, 7];
  bubbleSort(data);
  expect(data).toEqual([2, 3, 4, 4, 5, 6, 7, 7]);
});
