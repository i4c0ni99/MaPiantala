import '@testing-library/jest-dom';

// Test the math functions in simple math
import { add } from '../utils/simple-math';

// Test add function
test('Checks the add function to be adding numbers', () => {
  const a = 1, b = 2;
  expect(add(a, b)).toBe(a + b);
});

test('Checks the add function to commutative with any number', () => {
  // generate 2 random numbers
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  expect(add(a, b)).toBe(add(b, a));
});