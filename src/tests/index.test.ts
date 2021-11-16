import { add, divide } from '../index';

test('if the sum of two numbers matches', () => {
  expect(add(2, 3)).toEqual(5);
});

test('if division is done correctly', () => {
  expect(divide(20, 10).unwrap()).toEqual(2);
});

test(`division by zero (0) shouldn't be allowed`, () => {
  let quotient = divide(20, 0);

  expect(quotient.ok).toBeFalsy();
  expect(quotient.val).toEqual('cannot divide by 0');
});
