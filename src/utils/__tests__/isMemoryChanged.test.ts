import { describe, it, expect } from '@jest/globals';
import { isMemoryChanged } from '..';

describe('Testing isMemoryChanged function', () => {
  it('should return false if memory does not changed', () => {
    const string = '0';
    const received = isMemoryChanged(string);
    const expected = false;

    expect(received).toStrictEqual(expected);
  });

  it('should return true if memory changed', () => {
    const string = '12';
    const received = isMemoryChanged(string);
    const expected = true;

    expect(received).toStrictEqual(expected);
  });
});
