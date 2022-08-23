import { roman2int} from '../roman2int';

test('I_should_be_1', () => {
  expect(roman2int('I')).toBe(1);
});

test('II_should_be_2', () => {
  expect(roman2int('II')).toBe(2);
});

test('III_should_be_3', () => {
  expect(roman2int('III')).toBe(3);
});

test('IV_should_be_4', () => {
  expect(roman2int('IV')).toBe(4);
});

test('V_should_be_5', () => {
  expect(roman2int('V')).toBe(5);
});

test('VIII_should_be_8', () => {
  expect(roman2int('VIII')).toBe(8);
});

test('IX_should_be_9', () => {
  expect(roman2int('IX')).toBe(9);
});

test('X_should_be_10', () => {
  expect(roman2int('X')).toBe(10);
});

test('XIV_should_be_14', () => {
  expect(roman2int('XIV')).toBe(14);
});

test('XVI_should_be_16', () => {
  expect(roman2int('XVI')).toBe(16);
});

test('XIX_should_be_19', () => {
  expect(roman2int('XIX')).toBe(19);
});

test('XX_should_be_20', () => {
  expect(roman2int('XX')).toBe(20);
});
