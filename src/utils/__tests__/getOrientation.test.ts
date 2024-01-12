import { describe, it, expect, jest, afterEach } from '@jest/globals';
import { getOrientation } from '..';
import { Orientation } from '../../types';
import { Dimensions } from 'react-native';

describe('Testing getOrientation function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return Portrait orientation', () => {
    jest.spyOn(Dimensions, 'get').mockReturnValue({
      width: 828,
      height: 1792,
      scale: 0,
      fontScale: 0,
    });

    const received = getOrientation();
    const expected = Orientation.Portrait;

    expect(received).toStrictEqual(expected);
  });

  it('should return Landscape orientation', () => {
    jest.spyOn(Dimensions, 'get').mockReturnValue({
      width: 1792,
      height: 828,
      scale: 0,
      fontScale: 0,
    });

    const received = getOrientation();
    const expected = Orientation.Landscape;

    expect(received).toStrictEqual(expected);
  });
});
