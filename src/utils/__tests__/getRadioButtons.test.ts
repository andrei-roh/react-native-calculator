import { describe, it, expect } from '@jest/globals';
import { getRadioButtons } from '../getRadioButtons';
import { portraitKeyboardData } from '../../constants';

describe('Testing getRadioButtons function', () => {
  it('should return correct Map with radio buttons ids', () => {
    const data = [
      ['86e47f33-63a8-4ee8-b438-74d324c87fdc', false],
      ['b07073fd-f33a-4c09-a11a-438da3045776', false],
      ['7737de9d-9e22-4bb6-8124-bd2349566e1c', false],
      ['75586991-9ee9-40b1-b5e1-dfedabd7282d', false],
    ];
    const received = getRadioButtons(portraitKeyboardData);
    const expected = new Map(data.map(([id, state]) => [id, state]));

    expect(received).toStrictEqual(expected);
  });

  it('should return empry Map if there are not radio buttons', () => {
    const data = [] as [string, boolean][];
    const received = getRadioButtons([]);
    const expected = new Map(data.map(([id, state]) => [id, state]));

    expect(received).toStrictEqual(expected);
  });
});
