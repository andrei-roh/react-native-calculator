import { describe, it, expect } from '@jest/globals';
import { getDisplayingValue } from '..';

describe('Testing getDisplayingValue function', () => {
  it('should display correct value for the first part of decimal fraction when number is less than 1', () => {
    const value = '.';
    const received = getDisplayingValue(value);
    const expected = '0,';

    expect(received).toStrictEqual(expected);
  });

  it('should display correct value for the last part of decimal fraction when number is more than 1', () => {
    const value = '123.';
    const received = getDisplayingValue(value);
    const expected = '123,';

    expect(received).toStrictEqual(expected);
  });

  it('should display correct value for decimal after entering separator', () => {
    const value = '456.0';
    const received = getDisplayingValue(value);
    const expected = '456,0';

    expect(received).toStrictEqual(expected);
  });

  it('should display correct value for decimal fraction when number is more than 1', () => {
    const value = '7890.123';
    const received = getDisplayingValue(value);
    const expected = '7890,123';

    expect(received).toStrictEqual(expected);
  });

  it('should display correct value', () => {
    const value = '123456';
    const received = getDisplayingValue(value);
    const expected = '123456';

    expect(received).toStrictEqual(expected);
  });
});
