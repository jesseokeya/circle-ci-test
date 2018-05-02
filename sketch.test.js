const {sum, subtract, multiply, divide} = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 2', () => {
  expect(subtract(2, 1)).toBe(1);
});

test('multplies 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('divides 1 / 2 to equal 2', () => {
  expect(divide(1, 2)).toBe(0.5);
});
