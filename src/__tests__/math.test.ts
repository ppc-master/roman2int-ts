import { add, mul } from '../math';


test('add_0_0_is_0', () => {
  expect(add(0, 0)).toBe(0);
})

test('add_0_1_is_1', () => {
  expect(add(0, 1)).toBe(1);
})

test('add_2_3_is_5', () => {
  expect(add(2, 3)).toBe(5);
})

test('mul_0_0_is_0', () => {
  expect(mul(0, 0)).toBe(0);
})

test('mul_1_2_is_2', () => {
  expect(mul(1, 2)).toBe(2);
})