import { describe, it, expect } from '@jest/globals';
import { getButtonTitle } from '..';
import { Action } from '../../types';

describe('Testing getButtonTitle function', () => {
  it('should return correct title when state is initial', () => {
    const type = Action.Degree;
    const isInitialState = true;
    const isSecondMode = false;
    const title = 'Test Title';

    const received = getButtonTitle(title, type, isInitialState, isSecondMode);
    const expected = title;

    expect(received).toStrictEqual(expected);
  });

  it('should return changed title', () => {
    const type = Action.AllClear;
    const isInitialState = false;
    const isSecondMode = false;
    const title = 'Test Title';
    const changeableTitle = 'Changed Title';

    const received = getButtonTitle(
      title,
      type,
      isInitialState,
      isSecondMode,
      changeableTitle,
    );
    const expected = changeableTitle;

    expect(received).toStrictEqual(expected);
  });
});
