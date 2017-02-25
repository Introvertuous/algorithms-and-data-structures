'use strict';

const { Stack } = require('.');

test('stack', () => {
    let stack = Stack.create();
    stack.push('one');
    stack.push('two');
    stack.push('three');
    expect(stack.pop()).toBe('three');
    expect(stack.pop()).toBe('two');
    expect(stack.pop()).toBe('one');
});
