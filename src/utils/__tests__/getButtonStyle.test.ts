import { describe, it, expect } from '@jest/globals';
import { getButtonStyle } from '..';
import { Action, ButtonColor, ButtonPressed, ButtonSize } from '../../types';

const styles = {
  defaultButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButton: {
    flex: 1,
    paddingLeft: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  defaultColor: {
    backgroundColor: '#56526a',
  },
  additionalColor: {
    backgroundColor: '#a6a6a6',
  },
  operatorColor: {
    backgroundColor: '#f09a36',
  },
  operatorColorOnPressed: {
    backgroundColor: '#fff',
  },
};

describe('Testing getButtonStyle function', () => {
  it('should return correct style if button does not pressed', () => {
    const buttonSize = ButtonSize.Big;
    const buttonColor = ButtonColor.Default;
    const buttonColorOnPressed = undefined;
    const isKeyPressed = false;

    const received = getButtonStyle(
      styles,
      buttonSize,
      buttonColor,
      Action.Division,
      isKeyPressed,
      buttonColorOnPressed,
    );
    const expected = [
      {
        ...styles.bigButton,
      },
      { ...styles.defaultColor },
    ];

    expect(received).toStrictEqual(expected);
  });

  it('should return correct style if button pressed', () => {
    const buttonSize = ButtonSize.Big;
    const buttonColor = ButtonColor.Operator;
    const buttonColorOnPressed = ButtonPressed.Operator;
    const isKeyPressed = true;

    const received = getButtonStyle(
      styles,
      buttonSize,
      buttonColor,
      Action.Addition,
      isKeyPressed,
      buttonColorOnPressed,
    );
    const expected = [
      {
        ...styles.bigButton,
      },
      { ...styles.operatorColorOnPressed },
    ];

    expect(received).toStrictEqual(expected);
  });

  it('should return correct style for the Memory Return button', () => {
    const buttonSize = ButtonSize.Big;
    const buttonColor = ButtonColor.Operator;
    const buttonColorOnPressed = ButtonPressed.Operator;
    const isKeyPressed = true;
    const isMemoryChanged = true;

    const received = getButtonStyle(
      styles,
      buttonSize,
      buttonColor,
      Action.MemoryReturn,
      isKeyPressed,
      buttonColorOnPressed,
      isMemoryChanged,
    );
    const expected = [
      {
        ...styles.bigButton,
      },
      { ...styles.operatorColorOnPressed },
      { ...styles.additionalColor },
    ];

    expect(received).toStrictEqual(expected);
  });
});
