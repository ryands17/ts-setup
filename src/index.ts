import { Ok, Err, Result } from 'ts-results';

export const add = (a: number, b: number) => {
  return a + b;
};

export const divide = (
  a: number,
  b: number
): Result<number, 'cannot divide by 0'> => {
  if (b === 0) {
    return Err('cannot divide by 0');
  }
  return Ok(a / b);
};

console.log('sum', add(20, 3));

let quotient = divide(20, 10);
if (quotient.ok) {
  console.log('squared quotient', quotient.val ** 2);
} else {
  console.error(quotient.val);
}
